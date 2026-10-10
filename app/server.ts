import { createServer } from "node:http";
import next from "next";
import { Server as SocketServer } from "socket.io";

type RacePhase = "countdown" | "racing" | "results";
type RaceInput = { accelerate: boolean; brake: boolean; steer: -1 | 0 | 1 };
type Racer = {
  id: string;
  name: string;
  socketId: string;
  connected: boolean;
  distance: number;
  speed: number;
  lane: number;
  laneVelocity: number;
  turnLoad: number;
  finishTime: number | null;
  points: number;
  place: number;
  input: RaceInput;
  lastInputAt: number;
};
type RaceRoom = {
  id: string;
  competitionId: string;
  players: Map<string, Racer>;
  phase: RacePhase;
  round: number;
  phaseEndsAt: number;
  lastBroadcastAt: number;
  lastSimulationAt: number;
  finishedCount: number;
};

const hostname = process.env.HOST ?? "0.0.0.0";
const port = Number(process.env.PORT ?? 3000);
const dev = process.argv.includes("--dev") || process.env.NODE_ENV === "development";
const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();
const rooms = new Map<string, RaceRoom>();
const playerRooms = new Map<string, string>();
const competitionRoomCounts = new Map<string, number>();
const RACE_LAP_METERS = 600;
const RACE_LAPS = 3;
const RACE_DISTANCE = RACE_LAP_METERS * RACE_LAPS;
const INTERMISSION_MS = 5_000;
const GRID_FORMATION_MS = 12_000;
const ROUND_COUNTDOWN_MS = 4_000;
const MAX_RACE_MS = 180_000;
const MAX_SPEED_KMH = 120;
const MAX_RACERS_PER_ROOM = 4;
const MAX_LANE = MAX_RACERS_PER_ROOM - 1;
const CORNER_SPEED_LOSS_KMH = 8; // Subtle cornering slowdown: preserve momentum instead of feeling like braking.
const TURN_LOAD_RISE_SECONDS = 0.38; // Ease into cornering drag gradually.
const TURN_LOAD_RECOVERY_SECONDS = 0.8; // Recover smoothly after steering is released.
const CORNER_SPEED_RECOVERY_KMH_PER_SECOND = 1.8;

function smoothToward(current: number, target: number, responseRate: number, delta: number) {
  const alpha = 1 - Math.exp(-delta * responseRate);
  return current + (target - current) * alpha;
}

function startRound(room: RaceRoom, now: number, countdownMs = GRID_FORMATION_MS) {
  room.round += 1;
  room.finishedCount = 0;
  room.phase = "countdown";
  room.phaseEndsAt = now + countdownMs;
  for (const [index, racer] of [...room.players.values()].entries()) {
    racer.distance = 0;
    racer.speed = 0;
    racer.lane = index;
    racer.laneVelocity = 0;
    racer.turnLoad = 0;
    racer.finishTime = null;
    racer.place = 0;
    racer.input = { accelerate: false, brake: false, steer: 0 };
  }
}

function finishRound(room: RaceRoom, now: number) {
  const results = [...room.players.values()]
    .filter(racer => racer.connected || racer.distance > 0)
    .sort((a, b) => {
      if (a.finishTime !== null && b.finishTime !== null) return a.finishTime - b.finishTime;
      if (a.finishTime !== null) return -1;
      if (b.finishTime !== null) return 1;
      return b.distance - a.distance || a.id.localeCompare(b.id);
    });
  results.forEach((racer, index) => {
    racer.place = index + 1;
    racer.points += Math.max(1, 25 - index * 3);
    racer.speed = 0;
    racer.laneVelocity = 0;
    racer.input = { accelerate: false, brake: false, steer: 0 };
  });
  room.phase = "results";
  room.phaseEndsAt = now + INTERMISSION_MS;
}

function snapshot(room: RaceRoom) {
  return {
    phase: room.phase,
    round: room.round,
    phaseEndsAt: room.phaseEndsAt,
    distance: RACE_DISTANCE,
    lapDistance: RACE_LAP_METERS,
    totalLaps: RACE_LAPS,
    maxPlayers: MAX_RACERS_PER_ROOM,
    players: [...room.players.values()]
      .sort((a, b) => b.distance - a.distance || a.id.localeCompare(b.id))
      .map(({ id, name, connected, distance, speed, lane, laneVelocity, points, place, input }) => ({
        id,
        name,
        connected,
        distance,
        speed,
        lane,
        laneVelocity,
        steer: input.steer,
        points,
        place,
        lap: Math.min(RACE_LAPS, Math.floor(distance / RACE_LAP_METERS) + 1),
        finished: distance >= RACE_DISTANCE,
      })),
  };
}

async function main() {
  await nextApp.prepare();
  const httpServer = createServer((request, response) => handle(request, response));
  const io = new SocketServer(httpServer, {
    maxHttpBufferSize: 8_000,
    transports: ["websocket", "polling"],
  });

  io.on("connection", socket => {
    socket.on("race:join", (payload: unknown) => {
      if (typeof payload !== "object" || payload === null) return;
      const data = payload as Record<string, unknown>;
      if (typeof data.competitionId !== "string" || !/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(data.competitionId)) {
        socket.emit("race:error", "Invalid competition ID.");
        return;
      }
      if (typeof data.playerId !== "string" || data.playerId.length < 8 || data.playerId.length > 64) {
        socket.emit("race:error", "Connect the wallet that joined this competition to enter its race.");
        return;
      }
      const competitionId = data.competitionId;
      const playerId = data.playerId;
      const assignmentKey = `${competitionId}:${playerId}`;
      let roomId = playerRooms.get(assignmentKey);
      let room = roomId ? rooms.get(roomId) : undefined;
      if (!room) {
        room = [...rooms.values()].find(candidate =>
          candidate.competitionId === competitionId
          && candidate.phase === "countdown"
          && candidate.players.size < MAX_RACERS_PER_ROOM,
        );
      }
      if (!room) {
        const roomNumber = competitionRoomCounts.get(competitionId) ?? 0;
        competitionRoomCounts.set(competitionId, roomNumber + 1);
        roomId = `race:${competitionId}:${roomNumber + 1}`;
        room = {
          id: roomId,
          competitionId,
          players: new Map(),
          phase: "countdown",
          round: 0,
          phaseEndsAt: Date.now() + GRID_FORMATION_MS,
          lastBroadcastAt: 0,
          lastSimulationAt: Date.now(),
          finishedCount: 0,
        };
        rooms.set(roomId, room);
        startRound(room, Date.now());
      } else {
        roomId = room.id;
      }

      const previous = room.players.get(playerId);
      if (previous) {
        const oldSocket = io.sockets.sockets.get(previous.socketId);
        if (oldSocket && oldSocket.id !== socket.id) oldSocket.leave(roomId);
        previous.socketId = socket.id;
        previous.connected = true;
        previous.name = typeof data.playerName === "string"
          ? data.playerName.replace(/[^\w .-]/g, "").slice(0, 18) || "Racer"
          : "Racer";
      } else {
        if (room.players.size >= MAX_RACERS_PER_ROOM) {
          socket.emit("race:error", "This race grid is full. Join again to be placed in the next grid.");
          return;
        }
        room.players.set(playerId, {
          id: playerId,
          name: typeof data.playerName === "string"
            ? data.playerName.replace(/[^\w .-]/g, "").slice(0, 18) || "Racer"
            : "Racer",
          socketId: socket.id,
          connected: true,
          distance: 0,
          speed: 0,
          lane: room.players.size,
          laneVelocity: 0,
          turnLoad: 0,
          finishTime: null,
          points: 0,
          place: 0,
          input: { accelerate: false, brake: false, steer: 0 },
          lastInputAt: 0,
        });
      }

      playerRooms.set(assignmentKey, roomId);
      socket.data.raceRoomId = roomId;
      socket.data.racePlayerId = playerId;
      void socket.join(roomId);
      socket.emit("race:state", snapshot(room));
      io.to(roomId).emit("race:state", snapshot(room));
    });

    socket.on("race:input", (payload: unknown) => {
      const roomId = socket.data.raceRoomId as string | undefined;
      const playerId = socket.data.racePlayerId as string | undefined;
      const room = roomId ? rooms.get(roomId) : undefined;
      const racer = room && playerId ? room.players.get(playerId) : undefined;
      if (!racer || !room || room.phase !== "racing" || typeof payload !== "object" || payload === null) return;
      const now = Date.now();
      if (now - racer.lastInputAt < 35) return;
      racer.lastInputAt = now;
      const input = payload as Record<string, unknown>;
      racer.input = {
        accelerate: input.accelerate === true,
        brake: input.brake === true,
        steer: input.steer === -1 || input.steer === 1 ? input.steer : 0,
      };
    });

    socket.on("disconnect", () => {
      const roomId = socket.data.raceRoomId as string | undefined;
      const playerId = socket.data.racePlayerId as string | undefined;
      const room = roomId ? rooms.get(roomId) : undefined;
      const racer = room && playerId ? room.players.get(playerId) : undefined;
      if (racer?.socketId === socket.id) {
        racer.connected = false;
        racer.input = { accelerate: false, brake: false, steer: 0 };
      }
    });
  });

  setInterval(() => {
    const now = Date.now();
    for (const [roomId, room] of rooms) {
      if (room.players.size === 0) {
        rooms.delete(roomId);
        continue;
      }
      const elapsed = Math.min(0.05, Math.max(0, (now - room.lastSimulationAt) / 1000));
      room.lastSimulationAt = now;
      if (room.phase === "countdown" && now >= room.phaseEndsAt) {
        room.phase = "racing";
        room.phaseEndsAt = now + MAX_RACE_MS;
      } else if (room.phase === "racing") {
        const racers = [...room.players.values()];
        const racingRacers = racers.filter(racer => racer.connected && racer.finishTime === null);
        for (const racer of racingRacers) {
          const throttle = racer.input.accelerate && !racer.input.brake;
          const turnTarget = racer.input.steer === 0 ? 0 : 1;
          const turnResponseSeconds = turnTarget > racer.turnLoad
            ? TURN_LOAD_RISE_SECONDS
            : TURN_LOAD_RECOVERY_SECONDS;
          racer.turnLoad += (turnTarget - racer.turnLoad) * (1 - Math.exp(-elapsed / turnResponseSeconds));

          const ahead = racingRacers.find(other => other.id !== racer.id
            && other.distance > racer.distance
            && other.distance - racer.distance < 26
            && Math.abs(other.lane - racer.lane) < 0.6);
          const drafting = ahead ? 3.5 : 0;
          const steeringDrag = throttle ? 0.12 * racer.turnLoad : 0;
          const acceleration = throttle ? 12.5 + drafting - steeringDrag : 0;
          const coastingDrag = throttle ? 0 : 1.4;
          const braking = racer.input.brake ? 30 : 0;

          const cornerDrag = racer.turnLoad * (0.35 + racer.speed * 0.012) * elapsed;
          const unconstrainedSpeed = Math.max(
            0,
            racer.speed + (acceleration - coastingDrag - braking) * elapsed - cornerDrag,
          );
          const cornerSpeedTarget = MAX_SPEED_KMH - racer.turnLoad * CORNER_SPEED_LOSS_KMH;
          const targetSpeed = throttle
            ? Math.min(MAX_SPEED_KMH, Math.max(0, Math.min(unconstrainedSpeed, cornerSpeedTarget)))
            : Math.min(MAX_SPEED_KMH, Math.max(0, unconstrainedSpeed));
          racer.speed = smoothToward(racer.speed, targetSpeed, throttle ? 5.5 : 4.5, elapsed);
          racer.speed = Math.min(MAX_SPEED_KMH, Math.max(0, racer.speed));

          const steerAuthority = 1 - 0.14 * Math.min(1, racer.speed / MAX_SPEED_KMH);
          racer.laneVelocity = Math.max(
            -6,
            Math.min(6, racer.laneVelocity - racer.input.steer * 24 * steerAuthority * elapsed),
          );
          racer.laneVelocity *= Math.exp(-1.8 * elapsed);
          racer.lane = Math.max(0, Math.min(MAX_LANE, racer.lane + racer.laneVelocity * elapsed));
          if ((racer.lane === 0 && racer.laneVelocity < 0) || (racer.lane === MAX_LANE && racer.laneVelocity > 0)) {
            racer.laneVelocity = 0;
          }

          const steeringOutward = (racer.lane <= 0.02 && racer.input.steer === 1)
            || (racer.lane >= MAX_LANE - 0.02 && racer.input.steer === -1);
          if (steeringOutward && throttle) {
            racer.speed = Math.max(0, racer.speed - 1.2 * elapsed);
          }
          racer.distance = Math.min(
            RACE_DISTANCE,
            racer.distance + (racer.speed / 3.6) * elapsed,
          );
          if (racer.distance >= RACE_DISTANCE) {
            racer.distance = RACE_DISTANCE;
            racer.finishTime = now;
            racer.place = ++room.finishedCount;
            racer.speed = 0;
            racer.laneVelocity = 0;
          }
        }

        for (let left = 0; left < racingRacers.length; left += 1) {
          for (let right = left + 1; right < racingRacers.length; right += 1) {
            const first = racingRacers[left];
            const second = racingRacers[right];
            const distanceGap = first.distance - second.distance;
            if (Math.abs(distanceGap) > 2.1 || Math.abs(first.lane - second.lane) > 0.7) continue;
            const direction = first.lane === second.lane
              ? first.id.localeCompare(second.id) < 0 ? -1 : 1
              : first.lane < second.lane ? -1 : 1;
            first.lane = Math.max(0, Math.min(MAX_LANE, first.lane + direction * 0.07));
            second.lane = Math.max(0, Math.min(MAX_LANE, second.lane - direction * 0.07));
            first.laneVelocity += direction * 0.35;
            second.laneVelocity -= direction * 0.35;
            if (first.lane === second.lane) {
              first.speed = Math.max(0, first.speed - 0.15);
              second.speed = Math.max(0, second.speed - 0.15);
            }
          }
        }
        const connected = [...room.players.values()].filter(player => player.connected);
        const everyoneFinished = connected.length > 0 && connected.every(player => player.finishTime !== null);
        const timedOut = now >= room.phaseEndsAt;
        if (everyoneFinished || timedOut) finishRound(room, now);
      } else if (room.phase === "results" && now >= room.phaseEndsAt) {
        startRound(room, now, ROUND_COUNTDOWN_MS);
      }

      if (now - room.lastBroadcastAt >= 100) {
        room.lastBroadcastAt = now;
        io.to(roomId).emit("race:state", snapshot(room));
      }
    }
  }, 50);

  httpServer.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
}

main().catch(error => {
  console.error("Could not start the Next.js and race server:", error);
  process.exitCode = 1;
});
