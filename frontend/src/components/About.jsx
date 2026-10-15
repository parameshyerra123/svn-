import React from 'react';

const highlights = [
  {
    icon: 'fa-bolt',
    title: 'Fast Turnaround & Quality',
    desc: 'Quick development cycles without compromising visual quality, responsiveness, or code maintainability.'
  },
  {
    icon: 'fa-code-branch',
    title: 'Clean Modern Architecture',
    desc: 'Modular React components and modern CSS structure built to perform fast across all devices.'
  },
  {
    icon: 'fa-lock',
    title: 'Secure & Reliable Standards',
    desc: 'SSL encryption, secure contact handling, and reliable database storage built into every project.'
  },
  {
    icon: 'fa-handshake',
    title: 'Direct Personal Partnership',
    desc: 'You communicate directly with the developer who understands your goals and treats your project with care.'
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
              We Build Modern Websites & <br />
              <span className="text-gradient">Digital Experiences</span>
            </h2>
            <p style={{ color: 'var(--gray-300)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              At <strong>SVN Solutions</strong>, we specialize in building sleek, high-performing websites and web applications for businesses, creators, and entrepreneurs.
              Based in India and serving clients worldwide, we bring your ideas to life with clean code and modern design.
            </p>
            <p style={{ color: 'var(--gray-300)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
              Whether you need a brand-new business website, an e-commerce store with WhatsApp ordering, or a custom web app, we deliver polished, mobile-friendly websites on time and within budget.
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
