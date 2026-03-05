import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface TeamMemberCardProps {
  initials: string;
  name: string;
  role: string;
  description: string;
}

export function TeamMemberCard({ initials, name, role, description }: TeamMemberCardProps) {
  return (
    <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
      <div 
        style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, var(--bg-subtle), var(--border))', 
          margin: '0 auto 1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          color: 'var(--text-muted)', 
          border: '1px solid var(--border)' 
        }}
      >
        {initials}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{name}</h3>
      <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>
        {role}
      </p>
      <p style={{ fontSize: '0.9375rem' }}>{description}</p>
    </motion.div>
  );
}
