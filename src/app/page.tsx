import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <div className="max-w-7xl w-full">
        <div className="border-8 border-black p-12 shadow-neo-lg bg-white relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent -mr-16 -mt-16 transform rotate-45 border-4 border-black"></div>

          <h1 className="text-[120px] font-black leading-none uppercase tracking-tighter mb-4 italic">
            PRIV<span className="text-accent underline decoration-8">PAY</span>
          </h1>
          <p className="text-2xl font-black uppercase mb-12 tracking-tight max-w-2xl bg-black text-white p-2 border-4 border-black inline-block">
            Private Invoice Audit System powered by FHE + ZK
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/vendor" className="neo-button bg-accent text-white py-12 flex flex-col items-center justify-center text-center group">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏪</span>
              <span className="text-2xl font-black uppercase italic group-active:translate-x-1 group-active:translate-y-1">Vendor Portal</span>
              <span className="text-xs uppercase font-bold mt-2 text-black/60">Create & Manage Invoices</span>
            </Link>

            <Link href="/payer" className="neo-button bg-white py-12 flex flex-col items-center justify-center text-center group">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">💳</span>
              <span className="text-2xl font-black uppercase italic">Payer Portal</span>
              <span className="text-xs uppercase font-bold mt-2 text-black/60">Pay & Decrypt Invoices</span>
            </Link>

            <Link href="/auditor" className="neo-button bg-black text-white py-12 flex flex-col items-center justify-center text-center group">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔍</span>
              <span className="text-2xl font-black uppercase italic text-accent">Auditor Portal</span>
              <span className="text-xs uppercase font-bold mt-2 text-white/60">Private Compliance Check</span>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t-4 border-black grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-black uppercase text-xl mb-2 italic">How it works</h3>
              <ul className="space-y-2 font-bold uppercase">
                <li>🔐 1. Amounts & Tax are encrypted with FHE</li>
                <li>📦 2. Metadata stored privately on IPFS</li>
                <li>✨ 3. Payments verified with ZK Proofs</li>
                <li>🧐 4. Auditors verify without seeing data</li>
              </ul>
            </div>
            <div className="flex items-end justify-end">
              <div className="border-4 border-black p-4 inline-block font-mono font-black text-xl bg-zinc-100">
                0xPROTO_V1.0.4
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
