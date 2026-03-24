'use client';

import React, { useState } from 'react';
import { Button } from '@/shared/components/Button';
import { Card } from '@/shared/components/Card';
import { Input } from '@/shared/components/Input';
import { fheClient } from '@/shared/lib/fheClient';
import { ipfsClient } from '@/shared/lib/ipfsClient';

export const CreateInvoiceForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    payer: '',
    amount: '',
    tax: '',
    dueDate: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Encrypting fields...');
      const encAmount = await fheClient.encrypt(formData.amount);
      const encTax = await fheClient.encrypt(formData.tax);
      
      console.log('Uploading metadata to IPFS...');
      const metadataHash = await ipfsClient.upload({
        description: formData.description,
        timestamp: Date.now()
      });

      console.log('Submitting to contract:', {
        payer: formData.payer,
        encAmount,
        encTax,
        metadataHash,
        dueDate: formData.dueDate
      });

      alert('Invoice created & encrypted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error creating invoice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Create New Private Invoice">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input 
          label="Payer Address" 
          placeholder="0x..." 
          value={formData.payer}
          onChange={(e) => setFormData({...formData, payer: e.target.value})}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input 
            label="Amount (ETH)" 
            type="number" 
            placeholder="0.00"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            required
          />
          <Input 
            label="Tax (%)" 
            type="number" 
            placeholder="0"
            value={formData.tax}
            onChange={(e) => setFormData({...formData, tax: e.target.value})}
            required
          />
        </div>
        <Input 
          label="Due Date" 
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
          required
        />
        <div className="flex flex-col gap-2">
           <label className="font-bold uppercase tracking-tight">Description (Stored Privately on IPFS)</label>
           <textarea 
             className="neo-input min-h-[100px]" 
             placeholder="Services rendered..."
             value={formData.description}
             onChange={(e) => setFormData({...formData, description: e.target.value})}
             required
           />
        </div>
        <Button variant="primary" type="submit" disabled={loading} className="mt-2">
          {loading ? 'ENCRYPTING & SUBMITTING...' : 'CREATE PRIVATE INVOICE'}
        </Button>
      </form>
    </Card>
  );
};
