import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { Logo } from '../ui/Logo';
import { navItems } from '../../data/content';
import { mobileMenuVariants, mobileMenuItemVariants } from '../../lib/animations';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled, scrollToSection } = useScroll(20);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const navStyle = {
    background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    borderBottomColor: isScrolled ? 'var(--border)' : 'transparent'
  };

  return (
    <nav className={`navbar ${isScrolled ? 'shadow-sm' : ''}`} style={navStyle}>
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
          <button 
            onClick={() => handleNavClick('contacto')} 
            className="btn btn-primary" 
            style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
          >
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
            variants={mobileMenuVariants}
          >
            {navItems.map((item, index) => (
              <motion.button 
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)} 
                className="nav-link"
                custom={index * 0.05}
                variants={mobileMenuItemVariants}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button 
              onClick={() => handleNavClick('contacto')} 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '0.75rem' }}
              custom={0.25}
              variants={mobileMenuItemVariants}
            >
              Contáctanos
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
