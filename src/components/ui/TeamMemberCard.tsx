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
    <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', borderTop: '2px solid var(--text-main)', paddingTop: '2.5rem' }}>
      <div 
        style={{ 
          width: '80px', 
          height: '80px', 
          background: 'var(--primary-alpha)',
          color: 'var(--primary)',
          marginBottom: '1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '1.75rem', 
          fontWeight: 700,
          fontFamily: 'Playfair Display, serif'
        }}
      >
        {initials}
      </div>
      <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{name}</h3>
      <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
        {role}
      </p>
      <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{description}</p>
    </motion.div>
  );
}
