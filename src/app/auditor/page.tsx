'use client';

import React, { useState } from 'react';
import { InvoiceCard } from '@/domains/invoice/components/InvoiceCard';
import { AuditPanel } from '@/domains/audit/components/AuditPanel';
import { NotificationPanel } from '@/shared/components/NotificationPanel';

const MOCK_INVOICES = [
  { id: '1', vendor: '0x123...456', payer: '0x789...012', encryptedAmount: 'fhe_enc_NTA=', status: 'Pending' as const },
  { id: '2', vendor: '0x123...456', payer: '0xabc...def', encryptedAmount: 'fhe_enc_MjU=', status: 'Paid' as const },
];

export default function AuditorPage() {
  const [activeAudit, setActiveAudit] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <header className="mb-12 border-b-8 border-black pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter">Audit Dashboard</h1>
          <p className="font-bold text-accent uppercase">Privacy-Preserving Compliance Monitoring</p>
        </div>
        <div className="bg-black text-white p-4 border-4 border-accent hidden md:block">
          <div className="text-xs uppercase font-bold text-accent">Active Protocol</div>
          <div className="font-black text-xl tracking-widest">FHE-v2-STARK</div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4">
          <NotificationPanel />
        </aside>

        <main className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter italic">Global Invoice Registry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_INVOICES.map((inv) => (
                <InvoiceCard
                  key={inv.id}
                  id={inv.id}
                  vendor={inv.vendor}
                  payer={inv.payer}
                  encryptedAmount={inv.encryptedAmount}
                  status={inv.status}
                  role="auditor"
                  onAudit={() => setActiveAudit(inv.id)}
                />
              ))}
            </div>
          </div>

          <aside>
            <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter italic">Inspection Tool</h2>
            {activeAudit ? (
              <AuditPanel invoiceId={activeAudit} />
            ) : (
              <div className="neo-box p-8 bg-zinc-100 border-dashed border-zinc-400 text-zinc-400 font-bold uppercase text-center">
                Select an invoice to run FHE compliance checks
              </div>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
