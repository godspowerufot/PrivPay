'use client';

import React from 'react';
import { InvoiceCard } from '@/domains/invoice/components/InvoiceCard';
import { zkClient } from '@/shared/lib/zkClient';
import { NotificationPanel } from '@/shared/components/NotificationPanel';

const MOCK_INVOICES = [
  { id: '1', vendor: '0x123...456', payer: '0x789...012', encryptedAmount: 'fhe_enc_NTA=', status: 'Pending' as const },
];

export default function PayerPage() {
  const handlePay = async (id: string) => {
    try {
      console.log('Generating ZK Proof of Authorization...');
      const proof = await zkClient.generateProof({ invoiceId: id });
      console.log('ZK Proof generated:', proof);
      alert('Payment submitted with ZK Proof of Authorization!');
    } catch (err) {
      console.error(err);
      alert('Payment failed');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <header className="mb-12 border-b-8 border-black pb-4">
        <h1 className="text-6xl font-black uppercase tracking-tighter">Payer Dashboard</h1>
        <p className="font-bold text-accent uppercase">Private Payments & Settlements</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4">
          <NotificationPanel />
        </aside>

        <main className="w-full lg:w-3/4">
          <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter italic">Unpaid Invoices</h2>
          <div className="space-y-6">
            {MOCK_INVOICES.map((inv) => (
              <InvoiceCard
                key={inv.id}
                id={inv.id}
                vendor={inv.vendor}
                payer={inv.payer}
                encryptedAmount={inv.encryptedAmount}
                status={inv.status}
                role="payer"
                onPay={() => handlePay(inv.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
