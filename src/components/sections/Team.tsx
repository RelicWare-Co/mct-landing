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
            textAlign: 'center', 
            maxWidth: '700px', 
            margin: '0 auto 4rem' 
          }}>
            <Badge>{teamContent.badge}</Badge>
            <motion.h2 
              variants={fadeInUp} 
              style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
              {teamContent.title}
            </motion.h2>
            <motion.p variants={fadeInUp}>
              {teamContent.description}
            </motion.p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '3rem' 
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
