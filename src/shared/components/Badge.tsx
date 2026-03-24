import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info' }) => {
  const variantClasses = {
    success: 'bg-accent text-white',
    warning: 'bg-yellow-400 text-black',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <span className={`inline-block border-2 border-black px-2 py-0.5 text-xs font-bold uppercase ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};
