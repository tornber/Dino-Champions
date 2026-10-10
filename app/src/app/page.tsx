
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BN, utils as anchorUtils } from "@coral-xyz/anchor";
import {
  PublicKey,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/useProgram";
import {
  compPda,
  statusOf,
  label,
  sol,
  fmt,
  MIN_PLAYERS,
  MAX_PLAYERS,
  MAX_DURATION_MINUTES,
  PROGRAM_ID,
  APP_NETWORK,
  EXPLORER_CLUSTER,
  RPC,
} from "@/lib/program";

function describeError(error: unknown): string {
  const messages: string[] = [];
  let current: unknown = error;

  for (let depth = 0; depth < 4 && current; depth += 1) {
    if (current instanceof Error) {
      messages.push(`${current.name}: ${current.message}`);
      const nested = current as Error & {
        cause?: unknown;
        error?: unknown;
      };
      current = nested.error ?? nested.cause;
    } else if (typeof current === "object") {
      const detail = current as {
        name?: unknown;
        message?: unknown;
        code?: unknown;
        error?: unknown;
        cause?: unknown;
      };

      if (typeof detail.message === "string") {
        const name =
          typeof detail.name === "string" ? `${detail.name}: ` : "";
        const code =
          typeof detail.code === "string" ||
          typeof detail.code === "number"
            ? ` (code ${detail.code})`
            : "";

        messages.push(`${name}${detail.message}${code}`);
      }

      current = detail.error ?? detail.cause;
    } else {
      messages.push(String(current));
      break;
    }
  }

  return [...new Set(messages)].join(" → ") || String(error);
}

export default function Lobby() {
  const router = useRouter();
  const { program } = useProgram();
  const { connected, publicKey, signTransaction } = useWallet();

  const [list, setList] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [loadError, setLoadError] = useState("");
  const [txSignature, setTxSignature] = useState("");
  const [creating, setCreating] = useState(false);
  const [clockNow, setClockNow] = useState(() =>
    Math.floor(Date.now() / 1000)
  );

  const [pendingSubmission, setPendingSubmission] = useState<{
    signature: string;
    address: PublicKey;
    lastValidBlockHeight: number;
  } | null>(null);

  const [f, setF] = useState({
    fee: "0.1",
    start: "60",
    dur: "60",
    max: "50",
  });

  const loading = useRef<Promise<void> | null>(null);
  const creatingRef = useRef(false);

  const hasPendingCreation = list.some(
    (competition) => competition.pending
  );

  const load = useCallback(async () => {
    if (loading.current) return loading.current;

    const request = (async () => {
      try {
        const competitionAccount = program.account.competition;

        if (!competitionAccount) {
          throw new Error(
            "The loaded Anchor IDL does not define the competition account."
          );
        }

        const competitions = await competitionAccount.all();

        setList((current) => {
          const byAddress = new Map(
            current.map((competition) => [
              competition.publicKey.toBase58(),
              competition,
            ])
          );

          for (const competition of competitions) {
            byAddress.set(competition.publicKey.toBase58(), {
              ...competition,
              pending: false,
            });
          }

          return [...byAddress.values()].sort(
            (a, b) =>
              b.account.startTime.toNumber() -
              a.account.startTime.toNumber()
          );
        });

        setLoadError("");
      } catch (error: unknown) {
        setLoadError(
          `Unable to load competitions: ${describeError(error)}`
        );
      }
    })();

    loading.current = request;

    try {
      await request;
    } finally {
      loading.current = null;
    }
  }, [program]);

  useEffect(() => {
    void load();

    const interval = window.setInterval(() => void load(), 30000);

    return () => window.clearInterval(interval);
  }, [load]);

  useEffect(() => {
    const timer = window.setInterval(
      () => setClockNow(Math.floor(Date.now() / 1000)),
      1000
    );

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!pendingSubmission) return;

    let active = true;
    let checking = false;

    const checkPendingSubmission = async () => {
      if (checking) return;

      checking = true;

      try {
        const connection = program.provider.connection;

        const result = await connection.getSignatureStatuses(
          [pendingSubmission.signature],
          { searchTransactionHistory: true }
        );

        if (!active) return;

        const status = result.value[0];

        if (status?.err) {
          setList((current) =>
            current.filter(
              (competition) =>
                !competition.publicKey.equals(
                  pendingSubmission.address
                )
            )
          );

          setPendingSubmission(null);

          setMsg(
            `The signed transaction failed on ${APP_NETWORK}: ${JSON.stringify(
              status.err
            )}. Check the transaction link for details before creating another competition.`
          );

          return;
        }

        const isConfirmed =
          status?.confirmationStatus === "confirmed" ||
          status?.confirmationStatus === "finalized";

        const hasExpired =
          !isConfirmed &&
          (await connection.getBlockHeight("confirmed")) >
            pendingSubmission.lastValidBlockHeight;

        if (isConfirmed || hasExpired) {
          const account =
            await program.account.competition.fetchNullable(
              pendingSubmission.address,
              "confirmed"
            );

          if (!active) return;

          if (account) {
            setList((current) =>
              [
                ...current.filter(
                  (competition) =>
                    !competition.publicKey.equals(
                      pendingSubmission.address
                    )
                ),
                {
                  publicKey: pendingSubmission.address,
                  account,
                  pending: false,
                },
              ].sort(
                (a, b) =>
                  b.account.startTime.toNumber() -
                  a.account.startTime.toNumber()
              )
            );

            setPendingSubmission(null);
            setShow(false);
            setMsg(
              `The competition is confirmed on ${APP_NETWORK}.`
            );

            return;
          }

          if (!isConfirmed && hasExpired) {
            setList((current) =>
              current.filter(
                (competition) =>
                  !competition.publicKey.equals(
                    pendingSubmission.address
                  )
              )
            );

            setPendingSubmission(null);

            setMsg(
              `The signed transaction expired without creating a competition. It is now safe to try again. Signature: ${pendingSubmission.signature}`
            );
          }
        }
      } catch (error: unknown) {
        if (active) {
          setMsg(
            `Still checking the signed transaction ${pendingSubmission.signature}: ${describeError(
              error
            )}. The pending card is retained; do not submit another transaction yet.`
          );
        }
      } finally {
        checking = false;
      }
    };

    void checkPendingSubmission();

    const interval = window.setInterval(
      () => void checkPendingSubmission(),
      5000
    );

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [pendingSubmission, program]);

  useEffect(() => {
    const returnHome = () => {
      setShow(false);
      setFormErrors([]);

      window.requestAnimationFrame(() => {
        document
          .getElementById("competitions")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    };

    window.addEventListener("dino:home", returnHome);

    return () =>
      window.removeEventListener("dino:home", returnHome);
  }, []);

  useEffect(() => {
    const target = window.location.hash.slice(1);

    if (target === "competitions") {
      document
        .getElementById(target)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    } else if (target.startsWith("competition-")) {
      document
        .getElementById(target)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }
  }, [list]);

  async function create() {
    if (creatingRef.current) return;

    if (hasPendingCreation) {
      setMsg(
        "A previous competition transaction is still awaiting confirmation. Check its transaction link before trying again."
      );
      return;
    }

    if (!connected || !publicKey) {
      setMsg("Connect your wallet first");
      return;
    }

    const feeSol = Number(f.fee);
    const fee = Math.round(feeSol * 1e9);
    const startMinutes = Number(f.start);
    const durationMinutes = Number(f.dur);
    const max = Number(f.max);

    const now = Math.floor(Date.now() / 1000);
    const start = now + startMinutes * 60;
    const end = start + durationMinutes * 60;

    const errors: string[] = [];

    if (!Number.isFinite(feeSol) || feeSol <= 0) {
      errors.push("Entry fee must be greater than 0 SOL.");
    } else if (fee <= 0) {
      errors.push(
        "Entry fee must be at least 0.000000001 SOL."
      );
    } else if (!Number.isSafeInteger(fee)) {
      errors.push("Entry fee is above the supported limit.");
    }

    if (!Number.isInteger(max)) {
      errors.push("Max players must be a whole number.");
    }

    if (max < MIN_PLAYERS) {
      errors.push(
        `Max players must be at least ${MIN_PLAYERS}.`
      );
    }

    if (max > MAX_PLAYERS) {
      errors.push(
        `Max players cannot exceed ${MAX_PLAYERS}.`
      );
    }

    if (
      !Number.isSafeInteger(startMinutes) ||
      startMinutes <= 0 ||
      !Number.isSafeInteger(durationMinutes) ||
      durationMinutes <= 0 ||
      !Number.isSafeInteger(start) ||
      !Number.isSafeInteger(end)
    ) {
      errors.push(
        "Start time and duration must be positive whole numbers of minutes within the supported range."
      );
    }

    if (durationMinutes > MAX_DURATION_MINUTES) {
      errors.push(
        `Competition duration cannot exceed ${MAX_DURATION_MINUTES} minutes (1 hour).`
      );
    }

    if (errors.length) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);

    const id = new BN(Date.now());
    const competitionAddress = compPda(publicKey, id);

    const pendingAccount = {
      creator: publicKey,
      id,
      entryFee: new BN(fee),
      startTime: new BN(start),
      endTime: new BN(end),
      maxPlayers: max,
      playerCount: 0,
      status: { open: {} },
      adminShare: new BN(0),
      websiteShare: new BN(0),
      adminWithdrawn: false,
      websiteWithdrawn: false,
      leaderboard: [],
    };

    let preflightPassed = false;
    let transactionFailed = false;
    let signature: string | null = null;
    let expectedSignature: string | null = null;
    let submissionAttempted = false;

    creatingRef.current = true;
    setCreating(true);

    try {
      setMsg("Checking the deployed program…");
      setTxSignature("");

      const createMethod = program.methods
        .createCompetition(
          id,
          new BN(fee),
          new BN(start),
          new BN(end),
          max
        )
        .accounts({
          competition: competitionAddress,
          creator: publicKey,
        });

      const instruction = await createMethod.instruction();
      const connection = program.provider.connection;

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash("confirmed");

      const transaction = new Transaction({
        feePayer: publicKey,
        recentBlockhash: blockhash,
      }).add(instruction);

      const simulationTransaction = new VersionedTransaction(
        new TransactionMessage({
          payerKey: publicKey,
          recentBlockhash: blockhash,
          instructions: [instruction],
        }).compileToV0Message()
      );

      const simulation = await connection.simulateTransaction(
        simulationTransaction,
        {
          commitment: "confirmed",
          replaceRecentBlockhash: true,
          sigVerify: false,
        }
      );

      if (simulation.value.err) {
        const logs = simulation.value.logs ?? [];

        if (
          logs.some((line: string) =>
            line.includes("DeclaredProgramIdMismatch")
          )
        ) {
          throw new Error(
            `The deployed program at ${PROGRAM_ID.toBase58()} was built with a different program ID. The program must be rebuilt and upgraded on ${APP_NETWORK} by its upgrade authority before competitions can be created. No funds were sent.`
          );
        }

        if (
          JSON.stringify(simulation.value.err).includes(
            "AccountNotFound"
          )
        ) {
          throw new Error(
            `The program is not available on the wallet's selected network. This app is configured for ${APP_NETWORK}; switch Phantom to ${APP_NETWORK} and retry. No funds were sent.`
          );
        }

        throw new Error(
          `Transaction preflight failed: ${
            logs.slice(-5).join(" | ") ||
            JSON.stringify(simulation.value.err)
          }`
        );
      }

      preflightPassed = true;

      setMsg(
        `Approve the verified ${APP_NETWORK} transaction in your wallet…`
      );

      if (!signTransaction) {
        throw new Error(
          "The selected wallet does not support transaction signing."
        );
      }

      const signedTransaction =
        await signTransaction(transaction);

      const creatorSignature = signedTransaction.signatures.find(
        (entry) => entry.publicKey.equals(publicKey)
      )?.signature;

      if (!creatorSignature) {
        throw new Error(
          "The wallet returned the transaction without the creator's signature."
        );
      }

      const serializedTransaction =
        signedTransaction.serialize();

      expectedSignature =
        anchorUtils.bytes.bs58.encode(creatorSignature);

      setTxSignature(expectedSignature);
      setMsg(
        `Transaction signed. Submitting it to ${APP_NETWORK}…`
      );

      submissionAttempted = true;

      setPendingSubmission({
        signature: expectedSignature,
        address: competitionAddress,
        lastValidBlockHeight,
      });

      signature = await connection.sendRawTransaction(
        serializedTransaction,
        {
          preflightCommitment: "confirmed",
          maxRetries: 3,
        }
      );

      setList((current) =>
        [
          ...current.filter(
            (competition) =>
              !competition.publicKey.equals(competitionAddress)
          ),
          {
            publicKey: competitionAddress,
            account: pendingAccount,
            pending: true,
          },
        ].sort(
          (a, b) =>
            b.account.startTime.toNumber() -
            a.account.startTime.toNumber()
        )
      );

      router.push(
        `/#competition-${competitionAddress.toBase58()}`
      );

      setMsg(
        `Transaction submitted. Waiting for ${APP_NETWORK} confirmation…`
      );

      const confirmation = await connection.confirmTransaction(
        {
          signature,
          blockhash,
          lastValidBlockHeight,
        },
        "confirmed"
      );

      if (confirmation.value.err) {
        transactionFailed = true;
        setPendingSubmission(null);

        setList((current) =>
          current.filter(
            (competition) =>
              !competition.publicKey.equals(competitionAddress)
          )
        );

        throw new Error(
          `The transaction failed on-chain: ${JSON.stringify(
            confirmation.value.err
          )}`
        );
      }

      let account;
      let accountReadError = "";

      try {
        account = await program.account.competition.fetch(
          competitionAddress,
          "confirmed"
        );
      } catch (error: unknown) {
        accountReadError = describeError(error);
        account = pendingAccount;
      }

      setList((current) => {
        const updated = [
          ...current.filter(
            (competition) =>
              !competition.publicKey.equals(competitionAddress)
          ),
          {
            publicKey: competitionAddress,
            account,
            pending: false,
          },
        ];

        return updated.sort(
          (a, b) =>
            b.account.startTime.toNumber() -
            a.account.startTime.toNumber()
        );
      });

      setLoadError("");
      setPendingSubmission(null);
      setShow(false);

      setMsg(
        accountReadError
          ? `Competition created and confirmed on ${APP_NETWORK}, but its account could not be reloaded yet (${accountReadError}). The new card is shown; the list will retry automatically.`
          : `Competition created and confirmed on ${APP_NETWORK}.`
      );
    } catch (error: unknown) {
      const details = describeError(error);

      if (
        submissionAttempted &&
        expectedSignature &&
        !signature
      ) {
        try {
          const status =
            await program.provider.connection.getSignatureStatuses(
              [expectedSignature],
              { searchTransactionHistory: true }
            );

          const transactionStatus = status.value[0];

          if (transactionStatus?.err) {
            transactionFailed = true;
            setPendingSubmission(null);

            setList((current) =>
              current.filter(
                (competition) =>
                  !competition.publicKey.equals(
                    competitionAddress
                  )
              )
            );

            setMsg(
              `The signed transaction failed on ${APP_NETWORK}: ${JSON.stringify(
                transactionStatus.err
              )}. Signature: ${expectedSignature}`
            );

            setTxSignature(expectedSignature);
            return;
          }

          if (transactionStatus) {
            signature = expectedSignature;

            const account =
              await program.account.competition.fetchNullable(
                competitionAddress,
                "confirmed"
              );

            setList((current) =>
              [
                ...current.filter(
                  (competition) =>
                    !competition.publicKey.equals(
                      competitionAddress
                    )
                ),
                {
                  publicKey: competitionAddress,
                  account: account ?? pendingAccount,
                  pending: !account,
                },
              ].sort(
                (a, b) =>
                  b.account.startTime.toNumber() -
                  a.account.startTime.toNumber()
              )
            );

            setTxSignature(expectedSignature);
            setShow(false);

            if (account) {
              setPendingSubmission(null);
            }

            setMsg(
              account
                ? `The competition is confirmed on ${APP_NETWORK}. The transaction was found despite the RPC submission error.`
                : `${APP_NETWORK} found the signed transaction. Confirmation is pending; check the transaction link before retrying.`
            );

            router.push(
              `/#competition-${competitionAddress.toBase58()}`
            );

            return;
          }
        } catch (statusError: unknown) {
          setList((current) =>
            [
              ...current.filter(
                (competition) =>
                  !competition.publicKey.equals(
                    competitionAddress
                  )
              ),
              {
                publicKey: competitionAddress,
                account: pendingAccount,
                pending: true,
              },
            ].sort(
              (a, b) =>
                b.account.startTime.toNumber() -
                a.account.startTime.toNumber()
            )
          );

          setMsg(
            `The signed transaction may have been submitted, but its status could not be checked: ${details}. Status check failed: ${describeError(
              statusError
            )}. Check its ${APP_NETWORK} Explorer status before retrying.`
          );

          setTxSignature(expectedSignature);

          router.push(
            `/#competition-${competitionAddress.toBase58()}`
          );

          return;
        }
      }

      if (preflightPassed && !signature) {
        try {
          const confirmedAccount =
            await program.account.competition.fetchNullable(
              competitionAddress,
              "confirmed"
            );

          if (confirmedAccount) {
            setList((current) =>
              [
                ...current.filter(
                  (competition) =>
                    !competition.publicKey.equals(
                      competitionAddress
                    )
                ),
                {
                  publicKey: competitionAddress,
                  account: confirmedAccount,
                  pending: false,
                },
              ].sort(
                (a, b) =>
                  b.account.startTime.toNumber() -
                  a.account.startTime.toNumber()
              )
            );

            setShow(false);

            setMsg(
              `The competition is confirmed on ${APP_NETWORK}, although transaction submission returned an error. Check transaction activity before retrying. Details: ${details}`
            );

            router.push(
              `/#competition-${competitionAddress.toBase58()}`
            );

            return;
          }
        } catch (lookupError: unknown) {
          if (submissionAttempted && expectedSignature) {
            setList((current) =>
              [
                ...current.filter(
                  (competition) =>
                    !competition.publicKey.equals(
                      competitionAddress
                    )
                ),
                {
                  publicKey: competitionAddress,
                  account: pendingAccount,
                  pending: true,
                },
              ].sort(
                (a, b) =>
                  b.account.startTime.toNumber() -
                  a.account.startTime.toNumber()
              )
            );

            setTxSignature(expectedSignature);

            router.push(
              `/#competition-${competitionAddress.toBase58()}`
            );
          }

          setMsg(
            `The signed transaction result could not be verified: ${details}. Account check failed: ${describeError(
              lookupError
            )}. Check transaction activity before retrying.`
          );

          return;
        }
      }

      if (
        submissionAttempted &&
        expectedSignature &&
        !signature
      ) {
        setList((current) =>
          [
            ...current.filter(
              (competition) =>
                !competition.publicKey.equals(competitionAddress)
            ),
            {
              publicKey: competitionAddress,
              account: pendingAccount,
              pending: true,
            },
          ].sort(
            (a, b) =>
              b.account.startTime.toNumber() -
              a.account.startTime.toNumber()
          )
        );

        setTxSignature(expectedSignature);

        router.push(
          `/#competition-${competitionAddress.toBase58()}`
        );
      }

      const explanation =
        signature && !transactionFailed
          ? `A transaction was submitted, but confirmation could not be verified: ${details}. Its card remains marked “Confirming”. Check the transaction before retrying.`
          : preflightPassed && !signature
            ? submissionAttempted
              ? `${APP_NETWORK} submission did not return a result: ${details}. Check transaction status for ${
                  expectedSignature ?? "the signed transaction"
                } before retrying.`
              : `The wallet did not complete signing, so the app did not submit this transaction: ${details}. Check Phantom and reconnect before trying again.`
            : signature
              ? `${details}. Transaction signature: ${signature}`
              : details;

      setMsg(explanation);
    } finally {
      creatingRef.current = false;
      setCreating(false);
    }
  }

  function backToCompetitions() {
    setShow(false);

    document
      .getElementById("competitions")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <>
      <div className="top" style={{ marginTop: 22 }}>
        <div>
          <h1 style={{ margin: 0 }}>Battle for the pool</h1>

          <div className="mut">
            Compete in Dino Champions, climb the leaderboard, and
            win SOL. Needs {MIN_PLAYERS} player to start.
          </div>
        </div>

        <button
          className="btn"
          onClick={() =>
            show ? backToCompetitions() : setShow(true)
          }
          aria-expanded={show}
        >
          {show ? "← Back to competitions" : "+ Create"}
        </button>
      </div>

      {msg && <div className="note sm">{msg}</div>}

      {txSignature && (
        <div className="note sm">
          Transaction:{" "}
          <a
            href={`https://explorer.solana.com/tx/${txSignature}?cluster=${EXPLORER_CLUSTER}${
              EXPLORER_CLUSTER === "custom"
                ? `&customUrl=${encodeURIComponent(RPC)}`
                : ""
            }`}
            target="_blank"
            rel="noreferrer"
          >
            {txSignature}
          </a>
        </div>
      )}

      {loadError && (
        <div className="note sm">{loadError}</div>
      )}

      {show && (
        <div
          className="card"
          style={{ marginTop: 14, maxWidth: 420 }}
        >
          <div className="top" style={{ marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Create competition</h2>

            <button
              className="btn sec"
              type="button"
              onClick={backToCompetitions}
            >
              Back to competitions
            </button>
          </div>

          {formErrors.length > 0 && (
            <div
              className="note form-error"
              role="alert"
            >
              <strong>Please correct the following:</strong>
              <ul>
                {formErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {(
            [
              ["fee", "Entry fee (SOL)"],
              ["start", "Starts in (minutes)"],
              [
                "dur",
                `Duration (minutes, max ${MAX_DURATION_MINUTES})`,
              ],
              [
                "max",
                `Player range (${MIN_PLAYERS}–${MAX_PLAYERS})`,
              ],
            ] as const
          ).map(([k, l]) => (
            <label key={k}>
              {l}

              <input
                type="number"
                min={
                  k === "max"
                    ? MIN_PLAYERS
                    : k === "fee"
                      ? 0
                      : 1
                }
                max={
                  k === "max"
                    ? MAX_PLAYERS
                    : k === "dur"
                      ? MAX_DURATION_MINUTES
                      : undefined
                }
                step={k === "fee" ? "any" : 1}
                value={f[k]}
                onChange={(e) => {
                  setFormErrors([]);
                  setF({ ...f, [k]: e.target.value });
                }}
              />
            </label>
          ))}

          <div
            className="top"
            style={{
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn"
              onClick={create}
              disabled={creating || hasPendingCreation}
            >
              {creating
                ? "Creating competition…"
                : hasPendingCreation
                  ? "Waiting for confirmation…"
                  : "Create competition"}
            </button>

            <button
              className="btn sec"
              type="button"
              onClick={backToCompetitions}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div
        id="competitions"
        className="grid"
        style={{ marginTop: 18 }}
      >
        {list.map(({ publicKey: pk, account: c, pending }) => {
          const s = statusOf(c);
          const now = clockNow;

          return (
            <Link
              id={`competition-${pk.toBase58()}`}
              key={pk.toBase58()}
              href={`/c/${pk.toBase58()}`}
              className="card"
            >
              <div className="top">
                <b>Cup #{c.id.toString().slice(-5)}</b>

                <span
                  className={`badge ${pending ? "pending" : s}`}
                >
                  {pending
                    ? "Confirming"
                    : s === "cancelled" &&
                        c.playerCount === 0 &&
                        now >= c.startTime.toNumber()
                      ? "Expired · no entrants"
                      : label[s]}
                </span>
              </div>

              <div
                className="top"
                style={{ marginTop: 12 }}
              >
                <div>
                  <small className="mut">Entry</small>
                  <br />
                  <b className="mono">
                    {sol(c.entryFee)} SOL
                  </b>
                </div>

                <div style={{ textAlign: "right" }}>
                  <small className="mut">Prize pool</small>
                  <br />
                  <b className="mono">
                    {+(
                      sol(c.entryFee) *
                      c.playerCount *
                      0.9
                    ).toFixed(3)}{" "}
                    SOL
                  </b>
                </div>
              </div>

              <div className="bar">
                <i
                  style={{
                    width: `${Math.min(
                      100,
                      (c.playerCount / c.maxPlayers) * 100
                    )}%`,
                  }}
                />
              </div>

              <div className="top sm mut">
                <span>
                  {c.playerCount}/{c.maxPlayers} · min{" "}
                  {MIN_PLAYERS}
                </span>

                <span>
                  {s === "open"
                    ? "starts in " +
                      fmt(c.startTime.toNumber() - now)
                    : s === "live"
                      ? "ends in " +
                        fmt(c.endTime.toNumber() - now)
                      : ""}
                </span>
              </div>
            </Link>
          );
        })}

        {!list.length && (
          <div className="mut">
            {loadError
              ? "The competition list is unavailable."
              : "No competitions yet. Create the first one."}
          </div>
        )}
      </div>
    </>
  );
}