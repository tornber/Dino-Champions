import { AnchorProvider, Program, BN } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import idl from "@/idl/dino_champions.json";

export const RPC = process.env.NEXT_PUBLIC_RPC || "https://api.devnet.solana.com";
const rpcHost = new URL(RPC).hostname;
export const APP_NETWORK = rpcHost.includes("devnet")
  ? "Devnet"
  : rpcHost.includes("testnet")
    ? "Testnet"
  : rpcHost.includes("mainnet")
    ? "Mainnet"
    : rpcHost === "localhost" || rpcHost === "127.0.0.1"
      ? "Localnet"
      : "configured RPC";
export const EXPLORER_CLUSTER = rpcHost.includes("testnet")
  ? "testnet"
  : rpcHost.includes("devnet")
    ? "devnet"
    : rpcHost.includes("mainnet")
      ? "mainnet-beta"
      : "custom";
export const PROGRAM_ID = new PublicKey((idl as any).address);
export const MIN_PLAYERS = 1;
export const MAX_PLAYERS = 100;
export const MAX_DURATION_MINUTES = 60;
export const FINAL_SCORE_WINDOW_SECS = 60;
export const getProgram = (p: AnchorProvider): any => new Program(idl as any, p);

const le = (n: BN) => n.toArrayLike(Buffer, "le", 8);
export const configPda = () => PublicKey.findProgramAddressSync([Buffer.from("config")], PROGRAM_ID)[0];
export const compPda = (creator: PublicKey, id: BN) =>
  PublicKey.findProgramAddressSync([Buffer.from("competition"), creator.toBuffer(), le(id)], PROGRAM_ID)[0];
export const partPda = (comp: PublicKey, player: PublicKey) =>
  PublicKey.findProgramAddressSync([Buffer.from("participant"), comp.toBuffer(), player.toBuffer()], PROGRAM_ID)[0];

/** same split as the Rust program (pool in SOL) */
export const prize = (p: number, r: number) =>
  r === 1 ? p * 0.3 : r === 2 ? p * 0.2 : r === 3 ? p * 0.1 : r <= 10 ? (p * 0.2) / 7 : r <= 25 ? (p * 0.1) / 15 : 0;

export const sol = (l: number | BN) => +((typeof l === "number" ? l : l.toNumber()) / 1e9).toFixed(3);
export const short = (a: string) => a.slice(0, 4) + "…" + a.slice(-4);
export const fmt = (s: number) => { s = Math.max(0, Math.floor(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60); return h ? `${h}h ${m}m` : `${m}m ${s % 60}s`; };
export const label: any = { open: "Open", live: "Live", ended: "Finished", cancelled: "Cancelled · refunds" };

/** UI status derived from chain data + clock */
export function statusOf(c: any): "open" | "live" | "ended" | "cancelled" {
  const k = Object.keys(c.status)[0];
  if (k === "finalized") return "ended";
  if (k === "cancelled") return "cancelled";
  const t = Date.now() / 1000;
  if (t < c.startTime.toNumber()) return "open";
  if (c.playerCount < MIN_PLAYERS) return "cancelled";
  return t < c.endTime.toNumber() ? "live" : "ended";
}
export const rawStatus = (c: any) => Object.keys(c.status)[0];
