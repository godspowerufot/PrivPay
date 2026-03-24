'use client';

import React from 'react';
import { CreateInvoiceForm } from '@/domains/invoice/components/CreateInvoiceForm';
import { InvoiceCard } from '@/domains/invoice/components/InvoiceCard';
import { NotificationPanel } from '@/shared/components/NotificationPanel';

const MOCK_INVOICES = [
  { id: '1', vendor: '0x123...456', payer: '0x789...012', encryptedAmount: 'fhe_enc_NTA=', status: 'Pending' as const },
  { id: '2', vendor: '0x123...456', payer: '0xabc...def', encryptedAmount: 'fhe_enc_MjU=', status: 'Paid' as const },
];

export default function VendorPage() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <header className="mb-12 border-b-8 border-black pb-4">
        <h1 className="text-6xl font-black uppercase tracking-tighter">Vendor Dashboard</h1>
        <p className="font-bold text-accent uppercase">Private Billing & Receivables</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4">
          <NotificationPanel />
        </aside>

        <main className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <CreateInvoiceForm />
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter italic">Recent Invoices</h2>
            <div className="space-y-6">
              {MOCK_INVOICES.map((inv) => (
                <InvoiceCard
                  key={inv.id}
                  id={inv.id}
                  vendor={inv.vendor}
                  payer={inv.payer}
                  encryptedAmount={inv.encryptedAmount}
                  status={inv.status}
                  role="vendor"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

