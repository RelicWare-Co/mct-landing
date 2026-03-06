import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/ServiceCard';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { services, servicesContent } from '../../data/content';

export function Services() {
  return (
    <section id="servicios" className="section bg-subtle">
      <div className="container">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div style={{ 
            marginBottom: '4rem', 
            maxWidth: '800px'
          }}>
            <motion.h2 
              variants={fadeInUp} 
              style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}
            >
              {servicesContent.title}
            </motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.25rem' }}>
              {servicesContent.description}
            </motion.p>
          </div>

          <div className="grid-features">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
