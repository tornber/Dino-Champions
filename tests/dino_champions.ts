/**
 * Run with:  anchor test
 * Takes ~2 minutes because competitions have real start/end times on the local validator.
 */
import * as anchor from "@coral-xyz/anchor";
import { BN, Program } from "@coral-xyz/anchor";
import { Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { expect } from "chai";

const idl = require("../target/idl/dino_battle.json");

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
const conn = provider.connection;
const program: any = new Program(idl, provider);
const PID: PublicKey = program.programId;
const me = provider.wallet.publicKey; // deployer = admin = creator

const FEE = 100_000_000; // 0.1 SOL
const POOL = FEE * 25;

// ---------- helpers ----------
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const chainNow = async () => (await conn.getBlockTime(await conn.getSlot()))!;
const waitUntil = async (t: number) => { while ((await chainNow()) <= t) await sleep(500); };

const configPda = () => PublicKey.findProgramAddressSync([Buffer.from("config")], PID)[0];
const compPda = (id: number) =>
  PublicKey.findProgramAddressSync([Buffer.from("competition"), me.toBuffer(), new BN(id).toArrayLike(Buffer, "le", 8)], PID)[0];
const partPda = (comp: PublicKey, p: PublicKey) =>
  PublicKey.findProgramAddressSync([Buffer.from("participant"), comp.toBuffer(), p.toBuffer()], PID)[0];
const programData = PublicKey.findProgramAddressSync(
  [PID.toBuffer()], new PublicKey("BPFLoaderUpgradeab1e11111111111111111111111"))[0];

/** expects the promise to fail; optionally checks the error code name appears in the error */
async function fails(p: Promise<any>, code?: string) {
  try { await p; } catch (e: any) {
    const s = String(e) + JSON.stringify(e?.logs ?? e?.error ?? "");
    if (code && !s.includes(code)) throw new Error(`expected "${code}" but got: ${s}`);
    return;
  }
  throw new Error(`expected failure${code ? " (" + code + ")" : ""} but it succeeded`);
}

async function fund(kps: Keypair[], lamports: number) {
  for (let i = 0; i < kps.length; i += 10) {
    const tx = new Transaction();
    kps.slice(i, i + 10).forEach((k) => tx.add(SystemProgram.transfer({ fromPubkey: me, toPubkey: k.publicKey, lamports })));
    await provider.sendAndConfirm(tx);
  }
}

const create = (id: number, fee: number, start: number, end: number, max = 50) =>
  program.methods.createCompetition(new BN(id), new BN(fee), new BN(start), new BN(end), max)
    .accounts({ competition: compPda(id), creator: me }).rpc();

const join = (id: number, p: Keypair) =>
  program.methods.joinCompetition()
    .accounts({ competition: compPda(id), participant: partPda(compPda(id), p.publicKey), player: p.publicKey })
    .signers([p]).rpc();

const submit = (id: number, p: Keypair, score: number, signer: Keypair) =>
  program.methods.submitScore(new BN(score))
    .accounts({ config: configPda(), gameServer: signer.publicKey, competition: compPda(id), participant: partPda(compPda(id), p.publicKey) })
    .signers([signer]).rpc();

const submitFinal = (id: number, p: Keypair, total: number) =>
  program.methods.submitFinalScore(new BN(total))
    .accounts({ competition: compPda(id), participant: partPda(compPda(id), p.publicKey), player: p.publicKey })
    .signers([p]).rpc();

const prizeFor = (pool: number, rank: number) =>
  rank === 1 ? Math.floor((pool * 3000) / 10000)
  : rank === 2 ? Math.floor((pool * 2000) / 10000)
  : rank === 3 ? Math.floor((pool * 1000) / 10000)
  : rank <= 10 ? Math.floor(Math.floor((pool * 2000) / 10000) / 7)
  : rank <= 25 ? Math.floor(Math.floor((pool * 1000) / 10000) / 15) : 0;

// ---------- actors ----------
const gameServer = Keypair.generate();
const website = Keypair.generate();
const stranger = Keypair.generate();
const players = Array.from({ length: 25 }, () => Keypair.generate()); // competition A
const poor = Keypair.generate();

const A = 101; // full competition (25 players)
const B = 102; // under-filled competition (gets cancelled)
let aStart = 0, aEnd = 0, bStart = 0;

describe("dino_champions", () => {
  before(async () => {
    await fund([gameServer, website, stranger, ...players], 1_000_000_000);
    await fund([poor], 50_000_000); // 0.05 SOL: less than the 0.1 SOL entry fee
  });

  describe("config", () => {
    it("rejects initialize from a wallet that is not the upgrade authority", async () => {
      await fund([stranger], 0); // no-op, already funded
      await fails(
        program.methods.initialize(website.publicKey, gameServer.publicKey)
          .accounts({ config: configPda(), authority: stranger.publicKey, program: PID, programData })
          .signers([stranger]).rpc(),
        "Unauthorized");
    });

    it("initializes with the deployer", async () => {
      await program.methods.initialize(website.publicKey, gameServer.publicKey)
        .accounts({ config: configPda(), authority: me, program: PID, programData }).rpc();
      const cfg = await program.account.config.fetch(configPda());
      expect(cfg.authority.toBase58()).to.eq(me.toBase58());
      expect(cfg.websiteWallet.toBase58()).to.eq(website.publicKey.toBase58());
      expect(cfg.gameServer.toBase58()).to.eq(gameServer.publicKey.toBase58());
    });

    it("only the admin can update the config", async () => {
      await fails(
        program.methods.updateConfig(website.publicKey, gameServer.publicKey)
          .accounts({ config: configPda(), authority: stranger.publicKey }).signers([stranger]).rpc(),
        "Unauthorized");
    });
  });

  describe("create_competition validation", () => {
    it("validates the fee, times and 1-to-100 player limit", async () => {
      const t = await chainNow();
      await fails(create(1, 0, t + 100, t + 200), "InvalidEntryFee");
      await fails(create(2, FEE, t - 10, t + 200), "InvalidTimes");
      await fails(create(3, FEE, t + 100, t + 50), "InvalidTimes");
      await fails(create(4, FEE, t + 100, t + 200, 0), "MaxPlayersTooLow");
      await create(5, FEE, t + 100, t + 200, 1);
      expect((await program.account.competition.fetch(compPda(5))).maxPlayers).to.eq(1);
      await create(6, FEE, t + 100, t + 200, 100);
      expect((await program.account.competition.fetch(compPda(6))).maxPlayers).to.eq(100);
      await fails(create(7, FEE, t + 100, t + 200, 101), "MaxPlayersTooHigh");
      await create(8, FEE, t + 100, t + 100 + 60 * 60, 1);
      await fails(create(9, FEE, t + 100, t + 100 + 60 * 60 + 1, 1), "DurationTooLong");
    });

    it("stores an idempotent final score during the 60-second submission window", async () => {
      const t = await chainNow();
      const start = t + 10;
      const end = start + 10;
      const id = 10;
      await create(id, FEE, start, end, 1);
      await join(id, players[0]);
      await waitUntil(end + 1);
      await fails(program.methods.finalizeCompetition().accounts({ competition: compPda(id), caller: me }).rpc(), "NotEndedYet");

      await submitFinal(id, players[0], 12);
      await submitFinal(id, players[0], 12);
      let participant = await program.account.participant.fetch(partPda(compPda(id), players[0].publicKey));
      expect(participant.bestScore.toNumber()).to.eq(12);

      await submitFinal(id, players[0], 33);
      participant = await program.account.participant.fetch(partPda(compPda(id), players[0].publicKey));
      expect(participant.bestScore.toNumber()).to.eq(33);

      await waitUntil(end + 61);
      await fails(submitFinal(id, players[0], 34), "ScoringClosed");
      await program.methods.finalizeCompetition().accounts({ competition: compPda(id), caller: me }).rpc();
      expect(Object.keys((await program.account.competition.fetch(compPda(id))).status)[0]).to.eq("finalized");
    });
  });

  describe("joining", () => {
    it("creates two competitions and joins players", async () => {
      const t = await chainNow();
      aStart = t + 100; aEnd = aStart + 15; bStart = t + 35;
      await create(A, FEE, aStart, aEnd);
      await create(B, FEE, bStart, bStart + 60);

      const compBefore = await conn.getBalance(compPda(A));
      for (const p of players) await join(A, p);
      expect(await conn.getBalance(compPda(A))).to.eq(compBefore + FEE * 25);
      const c = await program.account.competition.fetch(compPda(A));
      expect(c.playerCount).to.eq(25);
      expect(c.leaderboard.length).to.eq(25);
    });

    it("rejects a player whose wallet balance is below the entry fee", async () => {
      await fails(join(A, poor), "InsufficientBalance");
    });

    it("rejects joining twice", async () => {
      await fails(join(A, players[0]));
    });
  });

  describe("cancel an underfilled competition (competition B has no players)", () => {
    it("cannot be cancelled before the start time", async () => {
      await fails(program.methods.cancelCompetition().accounts({ competition: compPda(B), caller: me }).rpc(), "NotStartedYet");
    });

    it("cannot be finalized without the minimum player count", async () => {
      await waitUntil(bStart);
      await fails(program.methods.finalizeCompetition().accounts({ competition: compPda(B), caller: me }).rpc(), "NotEnoughPlayers");
    });

    it("cancels a competition with no players", async () => {
      await program.methods.cancelCompetition().accounts({ competition: compPda(B), caller: me }).rpc();
      expect(Object.keys((await program.account.competition.fetch(compPda(B))).status)[0]).to.eq("cancelled");
    });
  });

  describe("cumulative scores + leaderboard (competition A, 25 players)", () => {
    it("rejects scores before the start time", async () => {
      await fails(submit(A, players[0], 10, gameServer), "NotStartedYet");
    });

    it("rejects scores from anyone but the game server", async () => {
      await waitUntil(aStart);
      await fails(submit(A, players[0], 10, stranger), "Unauthorized");
    });

    it("ranks players by score (highest first)", async () => {
      for (let i = 0; i < 25; i++) await submit(A, players[i], (i + 1) * 10, gameServer);
      const lb = (await program.account.competition.fetch(compPda(A))).leaderboard;
      expect(lb.length).to.eq(25);
      expect(lb[0].player.toBase58()).to.eq(players[24].publicKey.toBase58());
      expect(lb[0].score.toNumber()).to.eq(250);
      expect(lb[24].player.toBase58()).to.eq(players[0].publicKey.toBase58());
    });

    it("adds every run score to the on-chain player total", async () => {
      await submit(A, players[24], 5, gameServer);
      const lb = (await program.account.competition.fetch(compPda(A))).leaderboard;
      expect(lb[0].score.toNumber()).to.eq(255);
    });

    it("ranks by cumulative score and keeps the list at 25 with no duplicates", async () => {
      await submit(A, players[0], 1000, gameServer);
      const lb = (await program.account.competition.fetch(compPda(A))).leaderboard;
      expect(lb.length).to.eq(25);
      expect(lb[0].player.toBase58()).to.eq(players[0].publicKey.toBase58());
      expect(lb[0].score.toNumber()).to.eq(1010);
      expect(new Set(lb.map((e: any) => e.player.toBase58())).size).to.eq(25);
    });

    it("cannot finalize before the end", async () => {
      await fails(program.methods.finalizeCompetition().accounts({ competition: compPda(A), caller: me }).rpc(), "NotEndedYet");
    });
  });

  describe("finalize, claims and fee withdrawals", () => {
    const comp = () => compPda(A);

    it("finalizes after the end time and stores the admin/website shares", async () => {
      await waitUntil(aEnd + 1);
      await fails(submit(A, players[1], 9999, gameServer), "ScoringClosed");
      await program.methods.finalizeCompetition().accounts({ competition: comp(), caller: me }).rpc();
      const c = await program.account.competition.fetch(comp());
      expect(Object.keys(c.status)[0]).to.eq("finalized");
      expect(c.websiteShare.toNumber()).to.eq(Math.floor((POOL * 100) / 10000)); // 1%
      // admin = pool - all prizes - website (9% + dust)
      let prizes = 0; for (let r = 1; r <= 25; r++) prizes += prizeFor(POOL, r);
      expect(c.adminShare.toNumber()).to.eq(POOL - prizes - c.websiteShare.toNumber());
    });

    it("pays every winner exactly the prize of their rank", async () => {
      const lb = (await program.account.competition.fetch(comp())).leaderboard;
      for (let i = 0; i < 25; i++) {
        const p = players.find((k) => k.publicKey.equals(lb[i].player))!;
        const before = await conn.getBalance(comp());
        await program.methods.claim()
          .accounts({ competition: comp(), participant: partPda(comp(), p.publicKey), player: p.publicKey })
          .signers([p]).rpc();
        expect(before - (await conn.getBalance(comp()))).to.eq(prizeFor(POOL, i + 1), `rank ${i + 1}`);
        expect(await conn.getAccountInfo(partPda(comp(), p.publicKey))).to.eq(null);
      }
    });

    it("cannot claim twice", async () => {
      await fails(
        program.methods.claim()
          .accounts({ competition: comp(), participant: partPda(comp(), players[0].publicKey), player: players[0].publicKey })
          .signers([players[0]]).rpc());
    });

    it("only the admin can withdraw the admin share", async () => {
      await fails(
        program.methods.withdrawAdminShare()
          .accounts({ config: configPda(), authority: stranger.publicKey, competition: comp() }).signers([stranger]).rpc(),
        "Unauthorized");
    });

    it("admin and website withdraw their shares, only once", async () => {
      const c = await program.account.competition.fetch(comp());

      let before = await conn.getBalance(comp());
      await program.methods.withdrawAdminShare().accounts({ config: configPda(), authority: me, competition: comp() }).rpc();
      expect(before - (await conn.getBalance(comp()))).to.eq(c.adminShare.toNumber());

      before = await conn.getBalance(comp());
      const webBefore = await conn.getBalance(website.publicKey);
      await program.methods.withdrawWebsiteShare()
        .accounts({ config: configPda(), websiteWallet: website.publicKey, competition: comp() }).signers([website]).rpc();
      expect(before - (await conn.getBalance(comp()))).to.eq(c.websiteShare.toNumber());
      expect((await conn.getBalance(website.publicKey)) - webBefore).to.eq(c.websiteShare.toNumber());

      await fails(program.methods.withdrawAdminShare().accounts({ config: configPda(), authority: me, competition: comp() }).rpc(), "AlreadyWithdrawn");
      await fails(
        program.methods.withdrawWebsiteShare()
          .accounts({ config: configPda(), websiteWallet: website.publicKey, competition: comp() }).signers([website]).rpc(),
        "AlreadyWithdrawn");
    });

    it("leaves nothing but rent in the competition account (no lamports lost or stuck)", async () => {
      const info = (await conn.getAccountInfo(comp()))!;
      expect(info.lamports).to.eq(await conn.getMinimumBalanceForRentExemption(info.data.length));
    });
  });
});
