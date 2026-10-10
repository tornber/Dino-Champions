"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { APP_NETWORK } from "@/lib/program";
const WalletMultiButton = dynamic(async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton, { ssr: false });
export default function Header() {
  return (
    <header>
      <div className="w">
        <Link href="/#competitions" className="logo" onClick={() => window.dispatchEvent(new Event("dino:home"))}>
          🦖 Dino Battle
        </Link>
        <nav aria-label="Games" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <WalletMultiButton />
        </nav>
      </div>
      <div className="w network-hint">
        App network: <strong>{APP_NETWORK}</strong>. Set Phantom to the same network before creating a competition.
      </div>
    </header>
  );
}
