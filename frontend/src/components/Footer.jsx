import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--black-5)',
      padding: '70px 0 30px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '22px',
              fontWeight: '800',
              background: 'var(--grad-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '12px'
            }}>
              SVN SOLUTIONS
            </div>
            <p style={{ color: 'var(--gray-300)', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Turning visionary ideas into high-performance web applications, scalable mobile apps, and enterprise cloud solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/parameshyerra123" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--black-3)',
                border: '1px solid var(--black-5)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--black-3)',
                border: '1px solid var(--black-5)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/916300240474" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--black-3)',
                border: '1px solid var(--black-5)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '16px', fontWeight: '700', marginBottom: '18px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#services" style={{ color: 'var(--gray-300)', fontSize: '14px', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#about" style={{ color: 'var(--gray-300)', fontSize: '14px', textDecoration: 'none' }}>About SVN</a></li>
              <li><a href="#portfolio" style={{ color: 'var(--gray-300)', fontSize: '14px', textDecoration: 'none' }}>Case Studies</a></li>
              <li><a href="#process" style={{ color: 'var(--gray-300)', fontSize: '14px', textDecoration: 'none' }}>Our Process</a></li>
              <li><a href="#faq" style={{ color: 'var(--gray-300)', fontSize: '14px', textDecoration: 'none' }}>FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '16px', fontWeight: '700', marginBottom: '18px' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><span style={{ color: 'var(--gray-300)', fontSize: '14px' }}>Custom Web Apps</span></li>
              <li><span style={{ color: 'var(--gray-300)', fontSize: '14px' }}>Mobile App Dev</span></li>
              <li><span style={{ color: 'var(--gray-300)', fontSize: '14px' }}>UI/UX & Prototypes</span></li>
              <li><span style={{ color: 'var(--gray-300)', fontSize: '14px' }}>E-Commerce & Gateways</span></li>
              <li><span style={{ color: 'var(--gray-300)', fontSize: '14px' }}>Cloud & DevOps</span></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '16px', fontWeight: '700', marginBottom: '18px' }}>
              Direct Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="tel:+916300240474" style={{ color: 'var(--orange)', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>
                  <i className="fas fa-phone" style={{ marginRight: '8px' }}></i> +91 63002 40474
                </a>
              </li>
              <li>
                <a href="mailto:parameshyarra80@gmail.com" style={{ color: 'var(--gray-300)', fontSize: '14px', textDecoration: 'none' }}>
                  <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i> parameshyarra80@gmail.com
                </a>
              </li>
              <li>
                <span style={{ color: 'var(--gray-300)', fontSize: '14px' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i> India (Global Remote Services)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--black-5)',
          paddingTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '13px',
          color: 'var(--gray-500)'
        }}>
          <div>
            © {currentYear} SVN Solutions. All rights reserved.
          </div>
          <div>
            React.js + Express.js + MongoDB Atlas
          </div>
        </div>
      </div>
    </footer>
  );
}
