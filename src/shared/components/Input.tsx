import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-bold uppercase tracking-tight">{label}</label>}
      <input 
        className={`neo-input ${className}`} 
        {...props}
      />
    </div>
  );
};
