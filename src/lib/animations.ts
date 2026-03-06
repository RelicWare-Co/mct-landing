import type { Variants } from 'framer-motion';

// Refined, natural deceleration easing curves according to motion guidelines 
export const EASING = {
  easeOutQuart: [0.25, 1, 0.5, 1],  // Smooth, refined
  easeOutQuint: [0.22, 1, 0.36, 1], // Slightly snappier
  easeOutExpo: [0.16, 1, 0.3, 1],   // Confident, decisive
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: EASING.easeOutQuart } 
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: EASING.easeOutQuart } 
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: EASING.easeOutQuart } 
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: EASING.easeOutQuart } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: EASING.easeOutExpo } 
  }
};

export const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -10, scaleY: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scaleY: 1,
    transition: { duration: 0.3, ease: EASING.easeOutQuint }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scaleY: 0.95,
    transition: { duration: 0.2, ease: EASING.easeOutQuart }
  }
};

export const mobileMenuItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.4, ease: EASING.easeOutQuart }
  })
};
