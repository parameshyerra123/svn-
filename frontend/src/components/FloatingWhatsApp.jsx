import React from 'react';

export default function FloatingWhatsApp() {
  const phone = '916300240474';
  const message = encodeURIComponent('Hello SVN Solutions! I would like to discuss a project.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        zIndex: 9990,
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 26px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
