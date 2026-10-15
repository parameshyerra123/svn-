import React from 'react';

const highlights = [
  {
    icon: 'fa-bolt',
    title: 'Extreme Velocity & Quality',
    desc: 'Rapid sprint cycles without compromising code quality, test coverage, or maintainability.'
  },
  {
    icon: 'fa-code-branch',
    title: 'Future-Proof Architecture',
    desc: 'Clean, modular microservices and component patterns designed to scale from 100 to 1,000,000+ users.'
  },
  {
    icon: 'fa-lock',
    title: 'Bank-Grade Security',
    desc: 'Strict adherence to OWASP standards, role-based access control (RBAC), and SSL encryption by default.'
  },
  {
    icon: 'fa-handshake',
    title: 'Dedicated Partnership',
    desc: 'You work directly with senior engineers and tech leads who treat your product vision as their own.'
  }
];

export default function About() {
  return (
    <section id="about" className="about-section" style={{ background: 'var(--black-2)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <span className="section-tag">About SVN Solutions</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              We Are Creators, Engineers, & <br />
              <span className="text-gradient">Digital Architects</span>
            </h2>
            <p style={{ color: 'var(--gray-300)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              At <strong>SVN Solutions</strong>, we believe every business deserves enterprise-caliber technology.
              Based in India and serving clients worldwide, our multidisciplinary team of software engineers, app developers, and UI/UX designers transforms ideas into market-dominating applications.
            </p>
            <p style={{ color: 'var(--gray-300)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
              Whether you are an ambitious startup seeking your MVP or an established enterprise modernizing legacy systems, we deliver scalable web apps, intuitive mobile experiences, and secure cloud backends on time and within budget.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                <i className="fas fa-handshake"></i> Work With Us
              </a>
              <a href="tel:+916300240474" className="btn-outline">
                <i className="fas fa-phone"></i> +91 63002 40474
              </a>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {highlights.map((h, idx) => (
              <div key={idx} style={{
                background: 'var(--black-3)',
                border: '1px solid var(--black-5)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                transition: 'var(--transition)'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 107, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--orange)',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}>
                  <i className={`fas ${h.icon}`}></i>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '17px',
                  fontWeight: '700',
                  color: 'var(--white)',
                  marginBottom: '10px'
                }}>
                  {h.title}
                </h4>
                <p style={{
                  color: 'var(--gray-300)',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
