import { type ReactNode } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EASING } from '../../lib/animations';

interface ButtonProps extends HTMLMotionProps<"button"> {
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
  const prefersReducedMotion = useReducedMotion();
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <motion.button 
      className={`${baseClass} ${variantClass} ${className}`}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: EASING.easeOutQuart }}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={18} />}
    </motion.button>
  );
}
