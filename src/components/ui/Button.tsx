import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  showArrow = false, 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={18} />}
    </button>
  );
}
