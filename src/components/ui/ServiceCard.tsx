import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp } from '../../lib/animations';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div variants={fadeInUp} className="card">
      <div className="card-icon-wrapper">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
