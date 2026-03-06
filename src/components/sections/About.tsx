import { motion } from 'framer-motion';
import { Check, Building2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { aboutFeatures, aboutContent } from '../../data/content';

export function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container">
        <motion.div 
          className="grid-split" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              {aboutContent.title}
            </h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>
              {aboutContent.description}
            </p>
            
            <div className="about-list">
              {aboutFeatures.map((feature) => (
                <div key={feature.id} className="about-item" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.25rem' }}>
                    <Check size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.125rem' }}>{feature.title}</h4>
                    <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-muted)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} style={{ position: 'relative', display: 'flex', height: '100%' }}>
            <div style={{ 
              background: 'var(--primary)', 
              padding: '4rem 3.5rem', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%'
            }}>
              <div style={{ color: 'white', marginBottom: '2rem' }}>
                <Building2 size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '1.5rem', 
                color: 'white',
                fontFamily: 'Playfair Display, serif' 
              }}>
                {aboutContent.missionTitle}
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '1.125rem', 
                lineHeight: '1.7', 
                color: 'rgba(255, 255, 255, 0.9)' 
              }}>
                {aboutContent.missionText}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
