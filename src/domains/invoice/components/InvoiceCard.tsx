'use client';

import React, { useState } from 'react';
import { Card } from '@/shared/components/Card';
import { Badge } from '@/shared/components/Badge';
import { Button } from '@/shared/components/Button';
import { fheClient } from '@/shared/lib/fheClient';

interface InvoiceCardProps {
  id: string;
  vendor: string;
  payer: string;
  encryptedAmount: string;
  status: 'Pending' | 'Paid';
  role: 'vendor' | 'payer' | 'auditor';
  onPay?: () => void;
  onAudit?: () => void;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({ 
  id, vendor, payer, encryptedAmount, status, role, onPay, onAudit 
}) => {
  const [decryptedAmount, setDecryptedAmount] = useState<string | null>(null);
  const [decrypting, setDecrypting] = useState(false);

  const handleDecrypt = async () => {
    setDecrypting(true);
    try {
      const amount = await fheClient.decrypt(encryptedAmount);
      setDecryptedAmount(amount);
    } catch (err) {
      console.error(err);
    } finally {
      setDecrypting(false);
    }
  };

  return (
    <Card className="hover:shadow-neo-lg transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="font-black text-sm uppercase">Invoice #{id.slice(0, 8)}</span>
        <Badge variant={status === 'Paid' ? 'success' : 'warning'}>{status}</Badge>
      </div>
      
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex justify-between">
          <span className="font-bold uppercase">Vendor:</span>
          <span className="font-mono">{vendor.slice(0, 6)}...{vendor.slice(-4)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold uppercase">Payer:</span>
          <span className="font-mono">{payer.slice(0, 6)}...{payer.slice(-4)}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-2 border-2 border-black">
          <span className="font-bold uppercase">Amount:</span>
          <span className="font-mono font-black text-lg">
            {role === 'auditor' ? '🔐 ENCRYPTED' : (decryptedAmount ? `${decryptedAmount} ETH` : '••••••••')}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        {role !== 'auditor' && !decryptedAmount && (
          <Button onClick={handleDecrypt} disabled={decrypting} className="flex-1 text-xs">
            {decrypting ? 'DECRYPTING...' : 'DECRYPT PRIVATELY'}
          </Button>
        )}
        
        {role === 'payer' && status === 'Pending' && (
          <Button variant="primary" onClick={onPay} className="flex-1 text-xs">PAY NOW</Button>
        )}

        {role === 'auditor' && (
          <Button variant="primary" onClick={onAudit} className="flex-1 text-xs">RUN AUDIT CHECK</Button>
        )}
      </div>
    </Card>
  );
};
