import { useState, useEffect, useCallback } from 'react';

interface UseScrollReturn {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

export function useScroll(threshold: number = 20): UseScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return { isScrolled, scrollToSection };
}
