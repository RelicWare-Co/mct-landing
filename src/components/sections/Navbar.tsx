import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { Logo } from '../ui/Logo';
import { navItems } from '../../data/content';
import { mobileMenuVariants, mobileMenuItemVariants, EASING } from '../../lib/animations';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled, scrollToSection } = useScroll(20);
  const prefersReducedMotion = useReducedMotion();

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled shadow-sm' : ''}`}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
        paddingTop: isScrolled ? '0.75rem' : '1.5rem',
        paddingBottom: isScrolled ? '0.75rem' : '1.5rem',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
      transition={prefersReducedMotion ? { duration: 0 } : { 
        duration: isScrolled ? 0.15 : 0.4, 
        ease: EASING.easeOutQuart 
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo onClick={() => handleNavClick('inicio')} />

        {/* Desktop Nav */}
        <div className="nav-links">
          {navItems.map((item) => (
            <button 
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)} 
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
          <motion.button 
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASING.easeOutQuart }}
            onClick={() => handleNavClick('contacto')} 
            className="btn btn-primary" 
            style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
          >
            Contáctanos
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} color="var(--text-main)" />
          ) : (
            <Menu size={24} color="var(--text-main)" />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={prefersReducedMotion ? {} : mobileMenuVariants}
          >
            {navItems.map((item, index) => (
              <motion.button 
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)} 
                className="nav-link"
                custom={index * 0.05}
                variants={prefersReducedMotion ? {} : mobileMenuItemVariants}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button 
              onClick={() => handleNavClick('contacto')} 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '0.75rem' }}
              custom={0.25}
              variants={prefersReducedMotion ? {} : mobileMenuItemVariants}
            >
              Contáctanos
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
