import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calculator, 
  Code2, 
  Globe, 
  Landmark, 
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Briefcase,
  Layers,
  Hexagon,
  CircleDot,
  Box
} from 'lucide-react';
import './index.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'shadow-sm' : ''}`} style={{ background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent', borderBottomColor: isScrolled ? 'var(--border)' : 'transparent' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="logo-icon">
              <Building2 size={24} strokeWidth={2.5} />
            </div>
            <span>MCT</span>
          </div>

          {/* Desktop Nav */}
          <div className="nav-links">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">Inicio</button>
            <button onClick={() => scrollToSection('servicios')} className="nav-link">Servicios</button>
            <button onClick={() => scrollToSection('nosotros')} className="nav-link">Nosotros</button>
            <button onClick={() => scrollToSection('equipo')} className="nav-link">Equipo</button>
            <button onClick={() => scrollToSection('contacto')} className="btn btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} color="var(--text-main)" /> : <Menu size={24} color="var(--text-main)" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
             <button onClick={() => scrollToSection('inicio')} className="nav-link">Inicio</button>
             <button onClick={() => scrollToSection('servicios')} className="nav-link">Servicios</button>
             <button onClick={() => scrollToSection('nosotros')} className="nav-link">Nosotros</button>
             <button onClick={() => scrollToSection('equipo')} className="nav-link">Equipo</button>
             <button onClick={() => scrollToSection('contacto')} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Contáctanos</button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="container">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <span className="badge">Asesoría Integral & Tecnología</span>
              </motion.div>
              <motion.h1 variants={fadeInUp}>
                Impulsamos el crecimiento de tu empresa con estrategia y precisión
              </motion.h1>
              <motion.p variants={fadeInUp}>
                En Asesorías Integrales MCT combinamos experiencia contable, solidez tributaria y desarrollo tecnológico avanzado para transformar tu negocio.
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-buttons">
                <button onClick={() => scrollToSection('contacto')} className="btn btn-primary">
                  Agenda una Asesoría <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollToSection('servicios')} className="btn btn-secondary">
                  Explorar Servicios
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By / Partners Section */}
        <section className="bg-color" style={{ padding: '3rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
              Empresas que confían en nuestro trabajo
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem', opacity: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem' }}><Briefcase size={28} /> <span>CorpSys</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem' }}><Layers size={28} /> <span>NexoTech</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem' }}><Hexagon size={28} /> <span>Grupo Vértice</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem' }}><CircleDot size={28} /> <span>OmniRetail</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem' }}><Box size={28} /> <span>Logística Sur</span></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="section bg-subtle">
          <div className="container">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Soluciones de Alto Impacto</motion.h2>
                <motion.p variants={fadeInUp}>Diseñamos estrategias financieras y herramientas digitales a la medida de los desafíos modernos de tu negocio.</motion.p>
              </div>

              <div className="grid-features">
                <motion.div variants={fadeInUp} className="card">
                  <div className="card-icon-wrapper">
                    <Calculator size={24} />
                  </div>
                  <h3>Asesoría Contable</h3>
                  <p>Mantén tus finanzas bajo control. Registros precisos, estados financieros claros y cumplimiento normativo estricto para decisiones informadas.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="card">
                  <div className="card-icon-wrapper">
                    <Landmark size={24} />
                  </div>
                  <h3>Gestión Tributaria</h3>
                  <p>Optimización inteligente de tu carga fiscal en el marco legal. Declaraciones, planificación estratégica y representación corporativa.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="card">
                  <div className="card-icon-wrapper">
                    <Globe size={24} />
                  </div>
                  <h3>Desarrollo Web</h3>
                  <p>Presencia digital premium. Interfaces modernas, optimizadas y responsivas que comunican el verdadero valor de tu marca al mundo.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="card">
                  <div className="card-icon-wrapper">
                    <Code2 size={24} />
                  </div>
                  <h3>Software Personalizado</h3>
                  <p>Automatización y eficiencia. Sistemas escalables y seguros para facturación, inventarios o gestión interna adaptados a tu operativa.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
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
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Tu Aliado Estratégico Integral</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  Comprendemos la complejidad de operar en el mercado actual. Nuestro enfoque interdisciplinario fusiona la rigurosidad financiera con el dinamismo tecnológico, entregando resultados excepcionales sin fricción.
                </p>
                
                <div className="about-list">
                  <div className="about-item">
                    <div className="about-icon"><Check size={20} strokeWidth={3} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Atención Personalizada</h4>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>Un equipo dedicado que entiende tu industria a fondo.</p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="about-icon"><Check size={20} strokeWidth={3} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Visión 360°</h4>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>Finanzas sanas y tecnología de punta convergen en un solo proveedor.</p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="about-icon"><Check size={20} strokeWidth={3} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Innovación Continua</h4>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>Herramientas prácticas que aseguran la competitividad de tu empresa.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} style={{ position: 'relative' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--bg-subtle), white)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)', position: 'relative', zIndex: 1 }}>
                  <div className="logo-icon" style={{ width: '48px', height: '48px', marginBottom: '1.5rem' }}>
                    <Building2 size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Nuestra Misión</h3>
                  <p style={{ margin: 0, fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                    "Dotar a los líderes empresariales de las capacidades financieras, tributarias y digitales imprescindibles para forjar negocios rentables, escalables y líderes en su sector."
                  </p>
                </div>
                {/* Decorative blob */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0, borderRadius: '50%' }}></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="section">
          <div className="container">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
                <span className="badge">Nuestro Equipo</span>
                <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Profesionales a tu servicio</motion.h2>
                <motion.p variants={fadeInUp}>Conoce a los expertos detrás de nuestras soluciones contables y tecnológicas.</motion.p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                
                {/* Team Member 1 */}
                <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--bg-subtle), var(--border))', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    MP
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>María Pérez</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>Socia Directora & Auditora</p>
                  <p style={{ fontSize: '0.9375rem' }}>Especialista en planificación tributaria corporativa con más de 15 años de experiencia.</p>
                </motion.div>

                {/* Team Member 2 */}
                <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--bg-subtle), var(--border))', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    CG
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Carlos Gómez</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>CTO & Tech Lead</p>
                  <p style={{ fontSize: '0.9375rem' }}>Arquitecto de software enfocado en soluciones escalables y transformación digital.</p>
                </motion.div>

                {/* Team Member 3 */}
                <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--bg-subtle), var(--border))', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    LR
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Laura Rojas</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>Diseñadora UI/UX</p>
                  <p style={{ fontSize: '0.9375rem' }}>Diseñadora apasionada por crear experiencias de usuario intuitivas y memorables.</p>
                </motion.div>

                {/* Team Member 4 */}
                <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--bg-subtle), var(--border))', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    JS
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Javier Soto</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>Consultor Financiero</p>
                  <p style={{ fontSize: '0.9375rem' }}>Experto en análisis de riesgo, presupuestos y control de gestión para pymes.</p>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
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
                <span className="badge">Contacto</span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Iniciemos la transformación</h2>
                <p style={{ marginBottom: '3rem' }}>
                  ¿Preparado para escalar tu operativa y ordenar tus finanzas? Completa el formulario y un especialista corporativo se pondrá en contacto contigo a la brevedad.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><MapPin size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Ubicación</h4>
                      <p style={{ margin: 0, fontSize: '1rem' }}>Centro de Negocios MCT, Ciudad Principal</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><Mail size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Correo Electrónico</h4>
                      <p style={{ margin: 0, fontSize: '1rem' }}>contacto@asesoriasmct.com</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}><Phone size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Teléfono / WhatsApp</h4>
                      <p style={{ margin: 0, fontSize: '1rem' }}>+56 9 1234 5678</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="form-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Nombre completo</label>
                      <input type="text" id="name" className="form-input" placeholder="Ej. Juan Pérez" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Empresa</label>
                      <input type="text" id="company" className="form-input" placeholder="Tu Empresa SpA" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" id="email" className="form-input" placeholder="juan@empresa.com" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Servicio de interés</label>
                    <div style={{ position: 'relative' }}>
                      <select id="service" className="form-input" style={{ appearance: 'none' }} required>
                        <option value="" disabled selected>Selecciona un servicio...</option>
                        <option value="contabilidad">Asesoría Contable / Tributaria</option>
                        <option value="web">Diseño y Desarrollo Web</option>
                        <option value="software">Software Personalizado</option>
                        <option value="integral">Consultoría Integral</option>
                      </select>
                      <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Mensaje o detalle del requerimiento</label>
                    <textarea id="message" rows={4} className="form-input" placeholder="Cuéntanos sobre tus objetivos o problemas actuales..." required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                    Solicitar Propuesta
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid-features" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            <div style={{ gridColumn: '1 / -1', maxWidth: '400px' }}>
              <div className="logo" style={{ color: 'white', marginBottom: '1.25rem' }}>
                <div className="logo-icon">
                  <Building2 size={20} strokeWidth={2.5} />
                </div>
                <span>MCT</span>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                Excelencia operativa mediante inteligencia contable e innovación en el desarrollo de software.
              </p>
            </div>
            
            <div>
              <h4 className="footer-heading">Navegación</h4>
              <nav>
                <button onClick={() => scrollToSection('inicio')} className="footer-link">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="footer-link">Servicios</button>
                <button onClick={() => scrollToSection('nosotros')} className="footer-link">Nosotros</button>
              </nav>
            </div>
            
            <div>
              <h4 className="footer-heading">Servicios Core</h4>
              <nav>
                <button onClick={() => scrollToSection('servicios')} className="footer-link">Gestión Contable</button>
                <button onClick={() => scrollToSection('servicios')} className="footer-link">Asesoría Tributaria</button>
                <button onClick={() => scrollToSection('servicios')} className="footer-link">Desarrollo Web UI/UX</button>
                <button onClick={() => scrollToSection('servicios')} className="footer-link">Sistemas a Medida</button>
              </nav>
            </div>
            
            <div>
              <h4 className="footer-heading">Legal</h4>
              <nav>
                <a href="#" className="footer-link">Políticas de Privacidad</a>
                <a href="#" className="footer-link">Términos de Servicio</a>
              </nav>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Asesorías Integrales MCT. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;