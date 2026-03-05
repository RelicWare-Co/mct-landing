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
            textAlign: 'center', 
            marginBottom: '4rem', 
            maxWidth: '700px', 
            margin: '0 auto 4rem' 
          }}>
            <motion.h2 
              variants={fadeInUp} 
              style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
              {servicesContent.title}
            </motion.h2>
            <motion.p variants={fadeInUp}>
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
