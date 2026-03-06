import { partners } from '../../data/content';

export function TrustedBy() {
  return (
    <section className="bg-color" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '0.875rem', 
          fontWeight: 600, 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          margin: 0
        }}>
          Empresas que confían en nuestro trabajo
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'flex-start',
          gap: '3rem', 
          opacity: 0.6 
        }}>
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div 
                key={partner.id}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontWeight: 600, 
                  fontSize: '1.25rem' 
                }}
              >
                <Icon size={28} /> 
                <span>{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
