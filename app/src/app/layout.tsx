import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
export const metadata = { title: "Dino Battle" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Providers><Header /><main className="w" style={{ paddingBottom: 60 }}>{children}</main></Providers></body></html>);
}
