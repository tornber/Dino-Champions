"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BN } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/useProgram";
import { partPda, statusOf, rawStatus, prize, sol, short, fmt, label, MIN_PLAYERS, MAX_PLAYERS, FINAL_SCORE_WINDOW_SECS } from "@/lib/program";
import DinoGame from "@/components/DinoGame";

function describeError(error: unknown): string {
  const messages: string[] = [];
  const pending: unknown[] = [error];
  const seen = new Set<object>();

  while (pending.length > 0 && seen.size < 20) {
    const current = pending.shift();
    if (current instanceof Error) {
      if (current.message) messages.push(current.message);
      const nested = current as Error & { cause?: unknown; error?: unknown };
      if (nested.error !== undefined) pending.push(nested.error);
      if (nested.cause !== undefined) pending.push(nested.cause);
      continue;
    }
    if (typeof current === "string") {
      messages.push(current);
      continue;
    }
    if (typeof current !== "object" || current === null || seen.has(current)) continue;
    seen.add(current);

    const detail = current as Record<string, unknown>;
    for (const key of ["message", "error", "cause", "data", "originalError"]) {
      if (detail[key] !== undefined && detail[key] !== current) pending.push(detail[key]);
    }
    if (typeof detail.name === "string") messages.push(detail.name);
  }

  if (messages.some(message => /user rejected|request rejected|rejected the request|transaction cancelled|request was cancelled/i.test(message))) {
    return "Wallet request cancelled. No transaction was sent.";
  }
  const usefulMessages = [...new Set(messages.filter(message => message && message !== "[object Object]"))];
  return usefulMessages.join(": ") || "An unexpected error occurred. Check the wallet and Solana network, then try again.";
}

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const key = useMemo(() => new PublicKey(id), [id]);
  const { program, connection } = useProgram();
  const { publicKey } = useWallet();
  const [c, setC] = useState<any>(null);
  const [joined, setJoined] = useState(false);
  const [participant, setParticipant] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [finalizing, setFinalizing] = useState(false);
  const [, tick] = useState(0);

  const load = useCallback(async () => {
    try {
      const [competition, playerAccount] = await Promise.all([
        program.account.competition.fetch(key),
        publicKey ? program.account.participant.fetchNullable(partPda(key, publicKey)) : Promise.resolve(null),
      ]);
      setC(competition);
      setParticipant(playerAccount);
      setJoined(!!playerAccount);
    } catch (error: unknown) { setMsg(`Unable to load competition: ${describeError(error)}`); }
  }, [program, key, publicKey]);
  useEffect(() => { load(); const i = setInterval(() => tick(x => x + 1), 1000), j = setInterval(load, 8000); return () => { clearInterval(i); clearInterval(j); }; }, [load]);

  async function run(text: string, fn: () => Promise<any>) {
    try {
      setMsg(text);
      await fn();
      setMsg("Done ✓");
      await load();
    } catch (error: unknown) {
      setMsg(describeError(error));
    }
  }
  const join = () => run("Checking wallet balance…", async () => {
    const current = await program.account.competition.fetch(key);
    const currentCapacity = Math.min(current.maxPlayers, MAX_PLAYERS);
    if (current.playerCount >= currentCapacity) {
      throw new Error(`This competition is full (${current.playerCount}/${currentCapacity} players).`);
    }
    const bal = await connection.getBalance(publicKey!);
    if (bal < c.entryFee.toNumber() + 3_000_000) throw new Error(`Not enough SOL: you need ${sol(c.entryFee)} SOL + ~0.003 for fees/rent.`);
    setMsg("Confirm the payment in your wallet…");
    await program.methods.joinCompetition().accounts({ competition: key, player: publicKey }).rpc();
  });
  const call = (m: string, name: string, acc: any) => run(m, () => program.methods[name]().accounts({ competition: key, ...acc }).rpc());
  const cancelCompetition = () => run("Confirm the cancellation transaction in your wallet…", async () => {
    await program.methods.cancelCompetition().accounts({ competition: key, caller: publicKey }).rpc();
  });
  async function finalizeCompetition() {
    if (!publicKey || finalizing) return;
    setFinalizing(true);
    try {
      setMsg("Checking the on-chain competition status…");
      const current = await program.account.competition.fetch(key, "confirmed");
      if (rawStatus(current) !== "open") {
        await load();
        throw new Error("This competition is no longer open. Refresh the page to see its latest status.");
      }
      if (current.playerCount < MIN_PLAYERS) {
        throw new Error("This competition does not have enough players to finalize.");
      }
      const slot = await connection.getSlot("confirmed");
      const chainTime = await connection.getBlockTime(slot);
      if (chainTime === null) throw new Error("Could not read the current Solana block time.");
      const finalScoreDeadline = current.endTime.toNumber() + FINAL_SCORE_WINDOW_SECS;
      if (chainTime <= finalScoreDeadline) {
        throw new Error(`Results can be finalized after the final-score window closes in ${fmt(finalScoreDeadline + 1 - chainTime)}.`);
      }

      setMsg("Approve the results-finalization transaction in your wallet. The connected wallet pays the network fee.");
      const signature = await program.methods.finalizeCompetition()
        .accounts({ competition: key, caller: publicKey })
        .rpc();
      const finalized = await program.account.competition.fetch(key, "confirmed");
      setC(finalized);
      setMsg(`Results finalized on-chain. Players can now claim rewards. Transaction: ${short(signature)}`);
    } catch (error: unknown) {
      setMsg(describeError(error));
    } finally {
      setFinalizing(false);
    }
  }

  async function submitFinalTotal(total: number) {
    if (!publicKey) throw new Error("Reconnect the wallet that joined this competition to submit its final total.");
    if (!navigator.onLine) throw new Error("You are offline. This run could not be recorded on-chain.");
    const now = Math.floor(Date.now() / 1000);
    if (now < c.endTime.toNumber() || now > c.endTime.toNumber() + FINAL_SCORE_WINDOW_SECS) {
      throw new Error("The final-score submission window is closed.");
    }
    const signature = await program.methods.submitFinalScore(new BN(total))
      .accounts({ competition: key, participant: partPda(key, publicKey), player: publicKey })
      .rpc();
    await load();
    return `Final total ${total} recorded on-chain. Transaction: ${short(signature)}`;
  }

  if (!c) return <p className="mut">{msg || "Loading…"}</p>;
  const s = statusOf(c), raw = rawStatus(c), now = Date.now() / 1000, n = c.playerCount, capacity = Math.min(c.maxPlayers, MAX_PLAYERS), isFull = n >= capacity, fee = sol(c.entryFee), pool = fee * n;
  const emptyCompetitionExpired = raw === "open" && n === 0 && now >= c.startTime.toNumber();
  const cancellationReady = raw === "open" && n > 0 && n < MIN_PLAYERS && now >= c.startTime.toNumber();
  const finalizationReady = raw === "open" && n >= MIN_PLAYERS && now > c.endTime.toNumber() + FINAL_SCORE_WINDOW_SECS;
  const lb: any[] = c.leaderboard, myRank = publicKey ? lb.findIndex(e => e.player.equals(publicKey)) + 1 : 0;
  const myTotal = participant ? participant.bestScore.toNumber() : 0;

  let cta: any = null;
  if (emptyCompetitionExpired) cta = <button className="btn big" disabled>Competition expired without entrants</button>;
  else if (cancellationReady && publicKey) cta = <button className="btn big" onClick={cancelCompetition}>Cancel competition and enable refunds (wallet transaction fee applies)</button>;
  else if (cancellationReady) cta = <button className="btn big" disabled>Connect a wallet to cancel and enable refunds</button>;
  else if (!publicKey) cta = <button className="btn big" disabled>Connect wallet to join</button>;
  else if (s === "open") cta = joined ? <button className="btn big" disabled>You&apos;re in ✓ · starts in {fmt(c.startTime.toNumber() - now)}</button> : isFull ? <button className="btn big" disabled>Competition full · {n}/{capacity} players</button> : <button className="btn big" onClick={join}>Join for {fee} SOL</button>;
  else if (s === "live") cta = joined ? null : <button className="btn big" disabled>Entries closed</button>;
  else if (s === "ended" && raw === "open") cta = <button className="btn big" disabled>Final scores are being submitted · results can be finalized after the 60-second submission window</button>;
  else if (s === "ended" && raw === "finalized" && joined) cta = <button className="btn big" onClick={() => call("Claiming…", "claim", { player: publicKey })}>{myRank ? `Claim ${+prize(pool, myRank).toFixed(3)} SOL (rank #${myRank})` : "Close entry & recover rent"}</button>;
  else if (s === "cancelled" && raw === "cancelled" && joined) cta = <button className="btn big" onClick={() => call("Refunding…", "refund", { player: publicKey })}>Refund {fee} SOL</button>;

  return (<>
    <Link href="/" className="mut sm" style={{ display: "inline-block", marginTop: 18 }}>← All competitions</Link>
    <div className="top"><h1 style={{ margin: "6px 0" }}>Cup #{c.id.toString().slice(-5)}</h1><span className={`badge ${s}`}>{emptyCompetitionExpired ? "Expired · no entrants" : label[s]}</span></div>
    <div className="mut sm">by <span className="mono">{short(c.creator.toBase58())}</span></div>
    <div className="stats">
      <div className="stat"><small>Entry fee</small><b className="mono">{fee} SOL</b></div>
      <div className="stat"><small>Pool</small><b className="mono">{+pool.toFixed(3)} SOL</b></div>
      <div className="stat"><small>Players</small><b>{n}/{capacity}</b></div>
      <div className="stat"><small>Games</small><b>Dino Champions + Rocket Race + FPS + Flappy Bird</b></div>
      <div className="stat"><small>{s === "open" ? "Starts in" : s === "live" ? "Ends in" : "Status"}</small><b>{s === "open" ? fmt(c.startTime.toNumber() - now) : s === "live" ? fmt(c.endTime.toNumber() - now) : emptyCompetitionExpired ? "Expired · no entrants" : label[s]}</b></div>
    </div>
    {s === "open" && n < MIN_PLAYERS && <div className="note sm" style={{ borderColor: "var(--warn)" }}>
      {MIN_PLAYERS - n} more {MIN_PLAYERS - n === 1 ? "player" : "players"} needed. Creating a competition does not automatically enter its creator; join and approve the entry fee to count as a player. The player count updates after the join transaction confirms on-chain. If nobody joins by the start time, it expires without entrants; no entry fee or cancellation transaction is needed.
    </div>}
    {emptyCompetitionExpired && <div className="note sm" role="status">This competition expired without any entrants. No score was submitted, no cancellation transaction is needed, and there are no entry fees to refund.</div>}
    {raw === "open" && now >= c.endTime.toNumber() && now <= c.endTime.toNumber() + FINAL_SCORE_WINDOW_SECS
      && joined && <div className="note sm" role="status">Competition ended. Submit your browser-summed total within 60 seconds. Finalizing results after this window is a separate, manual wallet transaction.</div>}
    {cancellationReady &&
      <div className="note sm" role="status">The minimum player count was not met. A wallet must explicitly cancel the competition before participants can claim refunds; the wallet approving cancellation pays the network transaction fee.</div>}
    {msg && <div className="note sm" role="status">{msg}</div>}
    {finalizationReady && <div className="note" role="status" style={{ borderColor: "var(--acc)" }}>
      <strong>Final score window closed.</strong> Submit the on-chain transaction to finalize the leaderboard and enable reward claims.
      {publicKey
        ? <button className="btn big" style={{ marginTop: 10 }} onClick={() => void finalizeCompetition()} disabled={finalizing}>
          {finalizing ? "Finalizing results…" : "Finalize results on-chain"}
        </button>
        : <p className="sm mut">Connect any wallet to submit finalization. The wallet approving the transaction pays the network fee.</p>}
    </div>}
    <div style={{ marginBottom: 14 }}>
      {joined && raw === "open" ? (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>{now < c.startTime.toNumber() ? "Competition has not started" : now < c.endTime.toNumber() ? "Competition is live — four game stages" : finalizationReady ? "Scores are locked — finalize results to claim" : "Competition ended — final score window"}</h2>
          {now < c.endTime.toNumber() && <p className="sm mut">The competition time is split evenly across Dino Champions, the live multiplayer Rocket Race, FPS Team Deathmatch, and Flappy Bird. Race rounds repeat throughout the second stage. FPS kills count as points. Your scores from all four games are added together. Play is locked until the scheduled start time. Before play, this page clears browser storage and accessible cookies for this website, except for this competition&apos;s score and submission record. The combined score is submitted once after all four stages end; unsubmitted scores are remembered across reloads in this browser.</p>}
          {publicKey && <DinoGame
            total={myTotal}
            startsAt={c.startTime.toNumber()}
            endsAt={c.endTime.toNumber()}
            submissionDeadline={c.endTime.toNumber() + FINAL_SCORE_WINDOW_SECS}
            storageKey={`dino-scores:${key.toBase58()}:${publicKey.toBase58()}`}
            competitionId={key.toBase58()}
            playerId={publicKey.toBase58()}
            playerName={short(publicKey.toBase58())}
            onSubmitFinal={submitFinalTotal}
          />}
        </div>
      ) : cta}
    </div>
    <div className="two">
      <div className="card"><h2>Leaderboard · top 25 win</h2>
        <table><thead><tr><th>#</th><th>Player</th><th className="r">Score</th><th className="r">Prize</th></tr></thead><tbody>
          {lb.map((e, i) => <tr key={i} className={publicKey && e.player.equals(publicKey) ? "me" : ""}><td>{i + 1}</td><td className="mono">{publicKey && e.player.equals(publicKey) ? "You" : short(e.player.toBase58())}</td><td className="r mono">{e.score.toNumber() || "—"}</td><td className="r mono">{+prize(pool, i + 1).toFixed(3)}</td></tr>)}
        </tbody></table></div>
      <div className="card"><h2>How the pool is split</h2>
        <p className="sm">1st 30% · 2nd 20% · 3rd 10%<br />4th–10th share 20% equally<br />11th–25th share 10% equally<br />Website 1% · Deployer 9%</p>
        <p className="sm mut">Each player submits one browser-aggregated total on-chain. The program records the submitted total but cannot verify that the game produced it.</p></div>
    </div>
  </>);
}
