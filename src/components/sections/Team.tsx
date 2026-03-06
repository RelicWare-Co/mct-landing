import { motion } from 'framer-motion';
import { TeamMemberCard } from '../ui/TeamMemberCard';
import { Badge } from '../ui/Badge';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { teamMembers, teamContent } from '../../data/content';

export function Team() {
  return (
    <section id="equipo" className="section">
      <div className="container">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 0 4rem 0'
          }}>
            <Badge>{teamContent.badge}</Badge>
            <motion.h2 
              variants={fadeInUp} 
              style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}
            >
              {teamContent.title}
            </motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.25rem' }}>
              {teamContent.description}
            </motion.p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '4rem 3rem' 
          }}>
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                initials={member.initials}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
