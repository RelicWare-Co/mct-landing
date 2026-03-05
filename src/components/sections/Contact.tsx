import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { contactInfo, contactContent } from '../../data/content';
import type { ContactInfo } from '../../types';

const iconMap = {
  location: MapPin,
  email: Mail,
  phone: Phone
};

function ContactInfoItem({ info }: { info: ContactInfo }) {
  const Icon = iconMap[info.type];
  
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>
        <Icon size={24} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.25rem' }}>{info.label}</h4>
        <p style={{ margin: 0, fontSize: '1rem' }}>{info.value}</p>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="section bg-subtle">
      <div className="container">
        <motion.div 
          className="grid-features" 
          style={{ gap: '4rem' }}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge>{contactContent.badge}</Badge>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              {contactContent.title}
            </h2>
            <p style={{ marginBottom: '3rem' }}>
              {contactContent.description}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {contactInfo.map((info) => (
                <ContactInfoItem key={info.type} info={info} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="form-wrapper">
            <form onSubmit={(e) => e.preventDefault()}>
              <div 
                className="grid" 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '1rem' 
                }}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="Ej. Juan Pérez" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    className="form-input" 
                    placeholder="Tu Empresa SpA" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  placeholder="juan@empresa.com" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Servicio de interés
                </label>
                <div style={{ position: 'relative' }}>
                  <select 
                    id="service" 
                    className="form-input" 
                    style={{ appearance: 'none' }} 
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Selecciona un servicio...</option>
                    <option value="contabilidad">Asesoría Contable / Tributaria</option>
                    <option value="web">Diseño y Desarrollo Web</option>
                    <option value="software">Software Personalizado</option>
                    <option value="integral">Consultoría Integral</option>
                  </select>
                  <div style={{ 
                    position: 'absolute', 
                    right: '1rem', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    pointerEvents: 'none' 
                  }}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensaje o detalle del requerimiento
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="form-input" 
                  placeholder="Cuéntanos sobre tus objetivos o problemas actuales..." 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '1rem' }}
              >
                {contactContent.formTitle}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
