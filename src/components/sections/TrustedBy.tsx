import { partners } from '../../data/content';

export function TrustedBy() {
  return (
    <section className="bg-color" style={{ padding: '3rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-muted)', 
          fontSize: '0.875rem', 
          fontWeight: 600, 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em', 
          marginBottom: '2rem' 
        }}>
          Empresas que confían en nuestro trabajo
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
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
