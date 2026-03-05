import { motion } from 'framer-motion';
import { Check, Building2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { aboutFeatures, aboutContent } from '../../data/content';

export function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container">
        <motion.div 
          className="grid-features" 
          style={{ alignItems: 'center', gap: '4rem' }}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              {aboutContent.title}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              {aboutContent.description}
            </p>
            
            <div className="about-list">
              {aboutFeatures.map((feature) => (
                <div key={feature.id} className="about-item">
                  <div className="about-icon">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>{feature.title}</h4>
                    <p style={{ fontSize: '0.9375rem', margin: 0 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} style={{ position: 'relative' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--bg-subtle), white)', 
              padding: '3rem', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border)', 
              boxShadow: 'var(--shadow-md)', 
              position: 'relative', 
              zIndex: 1 
            }}>
              <div 
                className="logo-icon" 
                style={{ width: '48px', height: '48px', marginBottom: '1.5rem' }}
              >
                <Building2 size={28} />
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem', 
                color: 'var(--primary)' 
              }}>
                {aboutContent.missionTitle}
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '1.125rem', 
                lineHeight: '1.7', 
                color: 'var(--text-main)' 
              }}>
                {aboutContent.missionText}
              </p>
            </div>
            {/* Decorative blob */}
            <div style={{ 
              position: 'absolute', 
              top: '-10%', 
              right: '-10%', 
              width: '300px', 
              height: '300px', 
              background: 'var(--primary)', 
              filter: 'blur(100px)', 
              opacity: 0.1, 
              zIndex: 0, 
              borderRadius: '50%' 
            }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
