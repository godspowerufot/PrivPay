import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRIVPAY | Private Invoice Audit System",
  description: "Privacy-preserving invoice management using Fully Homomorphic Encryption (FHE) and Zero-Knowledge Proofs (ZK).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <nav className="border-b-4 border-black p-4 bg-white sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <span className="font-black text-2xl uppercase tracking-tighter italic"><a href="/">PRIV<span className="text-accent underline">PAY</span></a></span>
            <div className="flex gap-6 font-bold uppercase text-xs tracking-widest">
              <a href="/vendor" className="hover:text-accent">Vendor</a>
              <a href="/payer" className="hover:text-accent">Payer</a>
              <a href="/auditor" className="hover:text-accent">Auditor</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
