import { motion, useReducedMotion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { heroContent } from '../../data/content';
import { HeroCanvas } from '../ui/HeroCanvas';

export function Hero() {
  const { scrollToSection } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="inicio" className="hero">
      <div className="hero-canvas-wrapper absolute-bg">
        <HeroCanvas />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={prefersReducedMotion ? {} : staggerContainer}
          className="hero-content"
        >
          <motion.div variants={prefersReducedMotion ? {} : fadeInUp}>
            <Badge>{heroContent.badge}</Badge>
          </motion.div>
          
          <motion.h1 variants={prefersReducedMotion ? {} : fadeInUp}>
            {heroContent.title}
          </motion.h1>
          
          <motion.p variants={prefersReducedMotion ? {} : fadeInUp}>
            {heroContent.description}
          </motion.p>
          
          <motion.div variants={prefersReducedMotion ? {} : fadeInUp} className="hero-buttons">
            <Button 
              onClick={() => scrollToSection('contacto')} 
              showArrow
            >
              {heroContent.primaryCta}
            </Button>
            <Button 
              variant="secondary"
              onClick={() => scrollToSection('servicios')}
            >
              {heroContent.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
