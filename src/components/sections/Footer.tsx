import { useScroll } from '../../hooks/useScroll';
import { Logo } from '../ui/Logo';
import { footerSections, footerContent } from '../../data/content';
import type { FooterLink } from '../../types';

function FooterLinkItem({ link, onClick }: { link: FooterLink; onClick: (sectionId: string) => void }) {
  if (link.href) {
    return (
      <a href={link.href} className="footer-link">
        {link.label}
      </a>
    );
  }
  
  if (link.sectionId) {
    return (
      <button onClick={() => onClick(link.sectionId!)} className="footer-link">
        {link.label}
      </button>
    );
  }
  
  return null;
}

export function Footer() {
  const { scrollToSection } = useScroll();

  return (
    <footer className="footer">
      <div className="container">
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem' 
          }}
        >
          <div style={{ gridColumn: '1 / -1', maxWidth: '400px' }}>
            <div className="logo" style={{ color: 'white', marginBottom: '1.25rem' }}>
              <Logo light size="sm" />
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              {footerContent.description}
            </p>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="footer-heading">{section.title}</h4>
              <nav>
                {section.links.map((link, index) => (
                  <FooterLinkItem 
                    key={`${section.title}-${index}`} 
                    link={link} 
                    onClick={scrollToSection}
                  />
                ))}
              </nav>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
