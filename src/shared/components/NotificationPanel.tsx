import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';

interface Transaction {
  id: string;
  type: 'INVOICE' | 'PAYMENT' | 'AUDIT';
  status: 'SUCCESS' | 'PENDING';
  message: string;
  time: string;
}

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', type: 'INVOICE', status: 'SUCCESS', message: 'Invoice #82f1 generated (Encrypted)', time: '2m ago' },
  { id: '2', type: 'PAYMENT', status: 'PENDING', message: 'Payment for #1a2c incoming (ZK Proof)', time: '5m ago' },
  { id: '3', type: 'AUDIT', status: 'SUCCESS', message: 'Compliance Check Passed for #9d4e', time: '12m ago' },
  { id: '4', type: 'INVOICE', status: 'SUCCESS', message: 'New invoice from 0x789...012', time: '1h ago' },
  { id: '5', type: 'PAYMENT', status: 'SUCCESS', message: 'Settlement confirmed for #3b1f', time: '2h ago' },
];

export const NotificationPanel = () => {
  return (
    <Card title="Live Activity Feed" className="h-full flex flex-col min-w-[300px]">
      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {MOCK_TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="border-2 border-black p-3 bg-zinc-50 hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-1">
              <Badge variant={tx.type === 'INVOICE' ? 'info' : tx.type === 'PAYMENT' ? 'success' : 'warning'}>
                {tx.type}
              </Badge>
              <span className="text-[10px] font-black uppercase text-zinc-500">{tx.time}</span>
            </div>
            <p className="text-xs font-bold leading-tight uppercase tracking-tight mb-2">
              {tx.message}
            </p>
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${tx.status === 'SUCCESS' ? 'bg-accent' : 'bg-yellow-400'} border border-black`}></div>
              <span className="text-[10px] font-black uppercase italic">{tx.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t-2 border-dashed border-black">
        <div className="bg-black text-white p-2 text-[10px] font-mono text-center">
          CONNECTED TO FHENIX_TESTNET_V3
        </div>
      </div>
    </Card>
  );
};
