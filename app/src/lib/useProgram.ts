"use client";
import { useMemo } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider } from "@coral-xyz/anchor";
import { Keypair } from "@solana/web3.js";
import { getProgram } from "./program";

export function useProgram() {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const program = useMemo(() => {
    const dummy = Keypair.generate();
    const w: any = wallet ?? { publicKey: dummy.publicKey, signTransaction: async (t: any) => t, signAllTransactions: async (t: any) => t };
    return getProgram(new AnchorProvider(connection, w, { commitment: "confirmed" }));
  }, [connection, wallet]);
  return { program, connection, wallet };
}
