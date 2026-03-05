import { motion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { heroContent } from '../../data/content';

export function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge>{heroContent.badge}</Badge>
          </motion.div>
          
          <motion.h1 variants={fadeInUp}>
            {heroContent.title}
          </motion.h1>
          
          <motion.p variants={fadeInUp}>
            {heroContent.description}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="hero-buttons">
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
