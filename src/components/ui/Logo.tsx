import { Building2 } from 'lucide-react';

interface LogoProps {
  onClick?: () => void;
  light?: boolean;
  size?: 'sm' | 'md';
}

export function Logo({ onClick, light = false, size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 20 : 24;
  const strokeWidth = size === 'sm' ? 2.5 : 2.5;
  
  return (
    <div 
      className="logo cursor-pointer"
      onClick={onClick}
      style={{ color: light ? 'white' : undefined }}
    >
      <div className="logo-icon">
        <Building2 size={iconSize} strokeWidth={strokeWidth} />
      </div>
      <span>MCT</span>
    </div>
  );
}
