
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fmt } from "@/lib/program";

// Future games — disabled for the current competition.
// import RaceStage from "@/components/RaceStage";
// import RocketRace from "@/components/RocketRace";
// import TeamDeathmatch from "@/components/TeamDeathmatch";
// import FlappyBird from "@/components/FlappyBird";

const GAME_NAMES = ["Dino Champions"] as const;

type GameProgress = {
  version: 1;
  total: number;
  submitted: boolean;
  confirmation?: string;
};

function parseGameProgress(value: string | null): GameProgress | null {
  if (!value) return null;

  try {
    const progress: unknown = JSON.parse(value);

    if (typeof progress !== "object" || progress === null) {
      return null;
    }

    const candidate = progress as Partial<GameProgress>;

    if (
      candidate.version !== 1 ||
      !Number.isSafeInteger(candidate.total) ||
      (candidate.total ?? -1) < 0 ||
      typeof candidate.submitted !== "boolean"
    ) {
      return null;
    }

    return candidate as GameProgress;
  } catch {
    return null;
  }
}

export default function DinoGame({
  total,
  startsAt,
  endsAt,
  submissionDeadline,
  storageKey,
  competitionId,
  playerId,
  playerName,
  onSubmitFinal,
}: {
  total: number;
  startsAt: number;
  endsAt: number;
  submissionDeadline: number;
  storageKey: string;
  competitionId: string;
  playerId: string;
  playerName: string;
  onSubmitFinal: (total: number) => Promise<string>;
}) {
  // competitionId, playerId and playerName are retained for compatibility
  // with the existing competition page and future multiplayer games.
  void competitionId;
  void playerId;
  void playerName;

  const cv = useRef<HTMLCanvasElement>(null);

  const api = useRef<{
    start(): void;
    jump(): void;
    duck(value: boolean): void;
    stop(): void;
  }>({
    start() {},
    jump() {},
    duck() {},
    stop() {},
  });

  const [phase, setPhase] = useState<
    "ready" | "run" | "over" | "settling" | "ended" | "banned"
  >("ready");

  const [storageReady, setStorageReady] = useState(false);
  const [clockNow, setClockNow] = useState(
    () => Math.floor(Date.now() / 1000),
  );
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(total);
  const [msg, setMsg] = useState("");

  const [submissionState, setSubmissionState] = useState<
    "waiting" | "submitting" | "submitted" | "failed" | "closed"
  >("waiting");

  const progressKey = `${storageKey}:progress`;

  const [banned, setBanned] = useState(() => {
    try {
      return (
        typeof window !== "undefined" &&
        window.localStorage.getItem(`${storageKey}:local-ban`) === "1"
      );
    } catch {
      return false;
    }
  });

  const totalRef = useRef(total);
  const submissionStarted = useRef(false);
  const submissionComplete = useRef(false);
  const bannedRef = useRef(banned);
  const onSubmitFinalRef = useRef(onSubmitFinal);

  onSubmitFinalRef.current = onSubmitFinal;
  bannedRef.current = banned;

  // Dino Champions is the only active game.
  // Its duration is the complete competition duration.
  const gameDuration = Math.max(1, endsAt - startsAt);
  const activeGameIndex = 0;

  const banThisBrowser = useCallback(() => {
    if (bannedRef.current) return;

    bannedRef.current = true;
    totalRef.current = 0;

    setTotalScore(0);
    setBanned(true);
    setPhase("banned");
    api.current.stop();

    try {
      window.localStorage.setItem(`${storageKey}:local-ban`, "1");
      setMsg(
        "Developer tools may be open. To protect fair play, this competition has been locked in this browser.",
      );
    } catch (error: unknown) {
      const reason =
        error instanceof Error ? error.message : String(error);

      setMsg(
        `This browser has been locked for this session, but the local lock could not be saved: ${reason}`,
      );
    }
  }, [storageKey]);

  const submitFinalTotal = useCallback(async () => {
    if (bannedRef.current) {
      setMsg(
        "This browser is locked out of this competition and cannot submit its score.",
      );
      return;
    }

    if (submissionStarted.current || submissionComplete.current) return;

    const now = Math.floor(Date.now() / 1000);

    if (now < endsAt) {
      setMsg(
        "The competition is still running. Your final score will be submitted when it ends.",
      );
      return;
    }

    if (now > submissionDeadline) {
      setSubmissionState("closed");
      setPhase("ended");
      setMsg("The final-score submission window has closed.");
      return;
    }

    submissionStarted.current = true;
    setPhase("settling");
    setSubmissionState("submitting");

    setMsg(
      `Competition ended. Approve Phantom to submit your Dino Champions total of ${totalRef.current} to Solana.`,
    );

    try {
      const confirmation = await onSubmitFinalRef.current(totalRef.current);

      submissionComplete.current = true;
      setSubmissionState("submitted");
      setPhase("ended");
      setMsg(confirmation);

      try {
        window.localStorage.setItem(
          progressKey,
          JSON.stringify({
            version: 1,
            total: totalRef.current,
            submitted: true,
            confirmation,
          } satisfies GameProgress),
        );
      } catch (error: unknown) {
        const reason =
          error instanceof Error ? error.message : String(error);

        setMsg(
          `${confirmation} The browser could not save the submission record: ${reason}`,
        );
      }
    } catch (error: unknown) {
      const reason =
        error instanceof Error ? error.message : String(error);

      const windowOpen =
        Math.floor(Date.now() / 1000) <= submissionDeadline;

      setSubmissionState(windowOpen ? "failed" : "closed");
      setPhase("ended");

      setMsg(
        windowOpen
          ? `Final score not submitted: ${reason}. Retry before the submission window closes.`
          : `Final score was not submitted: ${reason}. The submission window has closed.`,
      );
    } finally {
      submissionStarted.current = false;
    }
  }, [endsAt, progressKey, submissionDeadline]);

  // Save Dino score progress locally.
  const saveScore = useCallback(
    (runScore: number) => {
      if (!Number.isFinite(runScore) || runScore < 0) return;

      const safeScore = Math.floor(runScore);

      totalRef.current += safeScore;
      setTotalScore(totalRef.current);

      try {
        window.localStorage.setItem(
          progressKey,
          JSON.stringify({
            version: 1,
            total: totalRef.current,
            submitted: false,
          } satisfies GameProgress),
        );
      } catch (error: unknown) {
        const reason =
          error instanceof Error ? error.message : String(error);

        setMsg(
          `Your score is in memory but could not be saved for a reload: ${reason}`,
        );
      }
    },
    [progressKey],
  );

  // Update the visible competition clock.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setClockNow(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  // Restore saved progress for this player and competition.
  // This only clears this game's progress key, not all website storage.
  useEffect(() => {
    let active = true;

    try {
      const progress = parseGameProgress(
        window.localStorage.getItem(progressKey),
      );

      const restoredTotal = progress?.total ?? total;

      totalRef.current = restoredTotal;
      setTotalScore(restoredTotal);

      const alreadySubmitted =
        progress?.submitted === true ||
        (Math.floor(Date.now() / 1000) >= endsAt &&
          total > 0 &&
          (!progress || progress.total === total));

      if (alreadySubmitted) {
        submissionComplete.current = true;
        setSubmissionState("submitted");
        setPhase("ended");

        setMsg(
          progress?.confirmation ??
            `Final total ${restoredTotal} is already recorded or reported as submitted.`,
        );
      } else {
        window.localStorage.setItem(
          progressKey,
          JSON.stringify({
            version: 1,
            total: restoredTotal,
            submitted: false,
          } satisfies GameProgress),
        );
      }

      if (bannedRef.current) {
        window.localStorage.setItem(`${storageKey}:local-ban`, "1");
      }

      if (active) setStorageReady(true);
    } catch (error: unknown) {
      const reason =
        error instanceof Error ? error.message : String(error);

      if (active) {
        setPhase("ended");
        setMsg(`Could not restore game progress: ${reason}`);
      }
    }

    return () => {
      active = false;
    };
  }, [endsAt, progressKey, storageKey, total]);

  // Basic browser-side fair-play check.
  useEffect(() => {
    if (!storageReady || bannedRef.current) return;

    const checkDevTools = () => {
      const dockedWidth = window.outerWidth - window.innerWidth;
      const dockedHeight = window.outerHeight - window.innerHeight;

      if (dockedWidth > 200 || dockedHeight > 200) {
        banThisBrowser();
      }
    };

    checkDevTools();

    const interval = window.setInterval(checkDevTools, 500);

    window.addEventListener("resize", checkDevTools);
    window.addEventListener("focus", checkDevTools);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", checkDevTools);
      window.removeEventListener("focus", checkDevTools);
    };
  }, [banThisBrowser, storageReady]);

  // Dino Champions game engine.
  useEffect(() => {
    if (!storageReady || bannedRef.current) return;

    const canvas = cv.current;
    const context = canvas?.getContext("2d");

    if (!context) {
      setPhase("ended");
      setMsg("Your browser could not initialize the game canvas.");
      return;
    }

    const W = 640;
    const H = 200;
    const G = 160;

    const styles = getComputedStyle(document.documentElement);

    const ink = styles.getPropertyValue("--ink") || "#222";
    const mut = styles.getPropertyValue("--mut") || "#888";
    const bg = styles.getPropertyValue("--card") || "#fff";
    const acc = styles.getPropertyValue("--acc") || "#4caf50";

    let y = G;
    let velocityY = 0;
    let ducking = false;

    let obstacles: {
      x: number;
      y: number;
      w: number;
      h: number;
      flying?: boolean;
    }[] = [];

    let speed = 6;
    let runScore = 0;
    let obstacleGap = 80;
    let frame = 0;
    let running = false;
    let lastFrame = 0;
    let animationFrame = 0;
    let stopped = false;

    const isStarted = () => Date.now() / 1000 >= startsAt;
    const isOver = () => Date.now() / 1000 >= endsAt;
    const onGround = () => y >= G;
    const dinosaurHeight = () => (ducking && onGround() ? 22 : 40);

    const draw = () => {
      context.fillStyle = bg;
      context.fillRect(0, 0, W, H);

      context.fillStyle = mut;
      context.fillRect(0, G + 1, W, 2);

      const height = dinosaurHeight();
      const top = y - height;

      context.fillStyle = ink;

      if (height === 22) {
        context.fillRect(40, top, 44, height);

        context.fillStyle = bg;
        context.fillRect(76, top + 4, 4, 4);
      } else {
        context.fillRect(40, top + 10, 30, height - 18);
        context.fillRect(52, top, 26, 18);

        context.fillStyle = bg;
        context.fillRect(68, top + 4, 4, 4);

        context.fillStyle = ink;

        const leg = onGround() && Math.floor(frame / 5) % 2;

        context.fillRect(44, top + height - 8, 8, leg ? 8 : 4);
        context.fillRect(58, top + height - 8, 8, leg ? 4 : 8);
      }

      obstacles.forEach((obstacle) => {
        context.fillStyle = obstacle.flying ? mut : acc;

        if (obstacle.flying) {
          context.fillRect(
            obstacle.x,
            obstacle.y,
            obstacle.w,
            obstacle.h,
          );

          context.fillRect(
            obstacle.x + 6,
            obstacle.y + (Math.floor(frame / 8) % 2 ? -8 : obstacle.h),
            14,
            8,
          );
        } else {
          context.fillRect(
            obstacle.x + obstacle.w / 2 - 4,
            obstacle.y,
            8,
            obstacle.h,
          );

          context.fillRect(
            obstacle.x,
            obstacle.y + 8,
            obstacle.w / 2,
            6,
          );

          context.fillRect(
            obstacle.x + obstacle.w / 2,
            obstacle.y + 14,
            obstacle.w / 2,
            6,
          );
        }
      });
    };

    const finishRun = () => {
      if (stopped) return;

      stopped = true;
      running = false;

      cancelAnimationFrame(animationFrame);
      draw();

      if (bannedRef.current) {
        setPhase("banned");
        return;
      }

      saveScore(runScore);
      setScore(Math.floor(runScore));

      if (isOver()) {
        setPhase("settling");
        void submitFinalTotal();
      } else {
        setPhase("over");
      }
    };

    const stop = () => {
      if (stopped) return;

      stopped = true;
      running = false;

      cancelAnimationFrame(animationFrame);

      if (bannedRef.current) {
        setPhase("banned");
        return;
      }

      // Save the current run when the competition ends.
      saveScore(runScore);
      setScore(Math.floor(runScore));
      setPhase("settling");

      if (Math.floor(Date.now() / 1000) <= submissionDeadline) {
        void submitFinalTotal();
      } else {
        setSubmissionState("closed");
        setPhase("ended");
        setMsg("The final-score submission window has closed.");
      }
    };

    const jump = () => {
      if (!running) return;

      if (onGround()) {
        velocityY = -12.5;
      }
    };

    const duck = (value: boolean) => {
      if (running) ducking = value;
    };

    const keyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        jump();
      }

      if (event.code === "ArrowDown") {
        event.preventDefault();
        duck(true);
      }
    };

    const keyUp = (event: KeyboardEvent) => {
      if (event.code === "ArrowDown") {
        duck(false);
      }
    };

    const loop = (timestamp: number) => {
      if (!running) return;

      if (isOver()) {
        stop();
        return;
      }

      const delta = Math.min((timestamp - lastFrame) / 16.7, 3);
      lastFrame = timestamp;
      frame += delta;

      speed += 0.0025 * delta;
      runScore += speed * delta * 0.06;

      velocityY += 0.7 * delta;
      y = Math.min(G, y + velocityY * delta);

      if (onGround()) velocityY = 0;

      obstacleGap -= speed * delta;

      if (obstacleGap <= 0) {
        const flying =
          runScore > 120 && Math.random() < 0.3;

        const height = 30 + Math.floor(Math.random() * 18);

        obstacles.push(
          flying
            ? {
                x: W,
                y: G - 52,
                w: 30,
                h: 18,
                flying: true,
              }
            : {
                x: W,
                y: G - height,
                w: 14 + Math.floor(Math.random() * 14),
                h: height,
              },
        );

        obstacleGap =
          260 + Math.random() * 260 + speed * 18;
      }

      obstacles.forEach((obstacle) => {
        obstacle.x -= speed * delta;
      });

      obstacles = obstacles.filter(
        (obstacle) => obstacle.x > -40,
      );

      const top = y - dinosaurHeight();

      const hit = obstacles.some(
        (obstacle) =>
          72 > obstacle.x &&
          44 < obstacle.x + obstacle.w &&
          y - 4 > obstacle.y &&
          top + 4 < obstacle.y + obstacle.h,
      );

      setScore(Math.floor(runScore));
      draw();

      if (hit) {
        finishRun();
        return;
      }

      animationFrame = requestAnimationFrame(loop);
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    api.current = {
      jump,
      duck,
      stop,

      start() {
        if (bannedRef.current) return;

        if (!isStarted()) {
          setMsg("The competition has not started yet.");
          return;
        }

        if (isOver()) {
          stop();
          return;
        }

        if (submissionComplete.current) {
          setPhase("ended");
          setMsg("Your final score has already been submitted.");
          return;
        }

        y = G;
        velocityY = 0;
        ducking = false;
        obstacles = [];
        speed = 6;
        runScore = 0;
        obstacleGap = 80;
        frame = 0;
        stopped = false;
        running = true;
        lastFrame = performance.now();

        setScore(0);
        setMsg("");
        setPhase("run");

        draw();

        animationFrame = requestAnimationFrame(loop);
      },
    };

    draw();

    const endTimer = window.setTimeout(
      stop,
      Math.max(0, endsAt * 1000 - Date.now()),
    );

    const submissionTimer = window.setTimeout(() => {
      if (Date.now() / 1000 > submissionDeadline) {
        setSubmissionState((current) =>
          current === "submitted" ? current : "closed",
        );

        setPhase((current) =>
         current === "banned" ? current : "ended",
        );

        setMsg(
          (current) =>
            current || "The final-score submission window has closed.",
        );
      }
    }, Math.max(0, submissionDeadline * 1000 - Date.now() + 1000));

    if (isOver()) stop();

    return () => {
      running = false;

      cancelAnimationFrame(animationFrame);
      clearTimeout(endTimer);
      clearTimeout(submissionTimer);

      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [
    endsAt,
    startsAt,
    storageReady,
    submissionDeadline,
    saveScore,
    submitFinalTotal,
  ]);

  if (banned) {
    return (
      <section
        className="game-lockout"
        role="alert"
        aria-labelledby="game-lockout-title"
      >
        <div className="game-lockout-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10M6.5 10h11a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-8A1.5 1.5 0 0 1 6.5 10Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14v3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="game-lockout-copy">
          <span className="game-lockout-eyebrow">
            Fair-play protection
          </span>

          <h3 id="game-lockout-title">Competition locked</h3>

          <p>
            {msg ||
              "This competition has been locked in this browser."}
          </p>

          <p className="game-lockout-detail">
            Play and score submission are disabled for this competition
            in this browser. This is a browser-side restriction.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div
        className="top"
        style={{ margin: "10px 2px", fontWeight: 700 }}
      >
        <span>
          Dino Champions · run score{" "}
          <span className="mono">{score}</span>
        </span>

        <span className="mut">
          Competition total{" "}
          <span className="mono">{totalScore}</span>
        </span>
      </div>

      <div className="sm mut" style={{ margin: "0 2px 8px" }}>
        Game 1/1: Dino Champions · {fmt(gameDuration)}
      </div>

      <div className="gw">
        <canvas
          ref={cv}
          width={640}
          height={200}
          onPointerDown={() => api.current.jump()}
          style={{ display: "block", maxWidth: "100%" }}
        />

        {phase !== "run" && (
          <div className="ov">
            <b style={{ fontSize: 22 }}>
              {phase === "ready"
                ? clockNow < startsAt
                  ? "Competition has not started"
                  : "Ready for Dino Champions"
                : phase === "over"
                  ? "Game over"
                  : phase === "settling"
                    ? "Processing competition score"
                    : "Competition ended"}
            </b>

            {phase === "over" && (
              <div className="mono" style={{ fontSize: 30 }}>
                {score}
              </div>
            )}

            {phase === "settling" && (
              <div className="mono">
                Final total: {totalScore}
              </div>
            )}

            {(phase === "settling" || phase === "ended") && (
              <div className="sm mut" role="status">
                {msg}
              </div>
            )}

            {phase === "settling" &&
              submissionState === "submitting" && (
                <div className="sm">
                  Waiting for Phantom approval and Solana confirmation…
                </div>
              )}

            {(phase === "settling" || phase === "ended") &&
              submissionState === "failed" &&
              Date.now() / 1000 <= submissionDeadline && (
                <button
                  className="btn sec"
                  onClick={() => void submitFinalTotal()}
                >
                  Submit final total again
                </button>
              )}

            {(phase === "ready" || phase === "over") && (
              <button
                className="btn"
                disabled={
                  phase === "ready" &&
                  (!storageReady || clockNow < startsAt)
                }
                onClick={() => api.current.start()}
              >
                {phase === "ready"
                  ? !storageReady
                    ? "Loading game progress…"
                    : clockNow < startsAt
                      ? `Starts in ${Math.max(0, startsAt - clockNow)}s`
                      : "Start"
                  : "Play again"}
              </button>
            )}
          </div>
        )}
      </div>

      <p className="sm mut">
        This competition features Dino Champions only for the full
        competition duration. Use Space or the Up Arrow to jump and the
        Down Arrow to duck. Your Dino Champions score contributes to
        your competition total. When the competition ends, approve one
        Phantom transaction to submit your final score to Solana.
      </p>

      {/*
        FUTURE GAME INTEGRATION — intentionally disabled.

        Rocket Race:
        <RaceStage
          competitionId={competitionId}
          playerId={playerId}
          playerName={playerName}
          onScore={recordRaceScore}
        />

        FPS Team Deathmatch:
        <iframe src="/team-deathmatch.html" title="FPS Team Deathmatch" />

        Flappy Bird:
        <FlappyBird />

        Re-enable these only when you want a multi-game competition again.
      */}
    </div>
  );
}