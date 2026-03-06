import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp, EASING } from '../../lib/animations';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div 
      variants={fadeInUp} 
      className="service-row"
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.3, ease: EASING.easeOutQuart }}
    >
      <div className="service-row-header">
        <div className="service-icon-wrapper">
          <Icon size={32} />
        </div>
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </motion.div>
  );
}
