'use client';

import React, { useState } from 'react';
import { Card } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import { Badge } from '@/shared/components/Badge';
import { fheClient } from '@/shared/lib/fheClient';

interface AuditPanelProps {
  invoiceId: string;
}

export const AuditPanel: React.FC<AuditPanelProps> = ({ invoiceId }) => {
  const [threshold, setThreshold] = useState('100');
  const [auditing, setAuditing] = useState(false);
  const [result, setResult] = useState<boolean | null>(null);

  const handleAudit = async () => {
    setAuditing(true);
    setResult(null);
    try {
      // Simulate FHE computation on-chain:
      // FHE.gt(invoiceAmount, threshold)
      console.log(`Running FHE Computation: GT(invoice_${invoiceId}, ${threshold})`);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Decrypt ONLY the boolean result
      const isCompliant = await fheClient.decryptBool('fhe_bool_res');
      setResult(isCompliant);
    } catch (err) {
      console.error(err);
    } finally {
      setAuditing(false);
    }
  };

  return (
    <Card className="bg-black text-white border-accent">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-black uppercase italic tracking-tighter text-accent underline">Compliance Tool</h3>
        <p className="text-xs font-bold uppercase">Check if invoice amount exceeds threshold:</p>
        
        <div className="flex gap-2">
          <input 
            type="number" 
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            className="bg-zinc-900 border-2 border-accent p-2 text-accent font-black outline-none w-24"
          />
          <span className="self-center font-bold">ETH</span>
        </div>

        <Button 
          variant="primary" 
          onClick={handleAudit} 
          disabled={auditing}
          className="bg-accent border-white text-black active:bg-white active:translate-x-0 active:translate-y-0"
        >
          {auditing ? 'RUNNING FHE COMPUTATION...' : 'EXECUTE PRIVATE CHECK'}
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 border-4 border-accent animate-pulse">
            <div className="flex justify-between items-center">
              <span className="font-black uppercase">Result:</span>
              <Badge variant={result ? 'success' : 'error'}>
                {result ? 'THRESHOLD PASSED' : 'FLAGGED'}
              </Badge>
            </div>
            <p className="text-[10px] uppercase mt-2 opacity-70">
              * Verification performed using FHE. Auditor only views boolean outcome.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
