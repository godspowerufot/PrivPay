import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`neo-card ${className}`}>
      {title && (
        <div className="mb-4 border-b-4 border-black pb-2">
          <h2 className="text-xl font-black uppercase tracking-tighter">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};
