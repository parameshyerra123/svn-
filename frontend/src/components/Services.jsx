import React from 'react';

const services = [
  {
    icon: 'fa-laptop-code',
    tag: 'Websites & Apps',
    title: 'Custom Website & Web App Development',
    desc: 'Modern, blazing-fast websites and web applications built with React, HTML5, CSS3, and Node.js. Perfectly optimized for Google SEO, mobile devices, and high conversion.',
    features: ['Business & Company Websites', 'React Single Page Web Apps', 'Fast Loading & Mobile Responsive', 'SEO Optimization & Contact Forms']
  },
  {
    icon: 'fa-mobile-screen-button',
    tag: 'Mobile Apps',
    title: 'Android & iOS Mobile App Development',
    desc: 'Functional, high-performance mobile applications built with React Native. Delivering smooth animations, intuitive navigation, and reliable performance on smartphones.',
    features: ['Android & iOS Compatible', 'Clean & Intuitive User Flow', 'Push Notifications & Messaging', 'Fast App Store Deployment']
  },
  {
    icon: 'fa-compass-drafting',
    tag: 'Design & Redesign',
    title: 'UI/UX Design & Website Redesign',
    desc: 'Transform your existing or new website into a visually captivating, modern digital experience. Clean interfaces crafted to attract and convert your visitors.',
    features: ['Modern Figma UI/UX Mockups', 'Complete Website Redesigns', 'Mobile-First Responsive Layouts', 'Clear Calls-to-Action (CTAs)']
  },
  {
    icon: 'fa-cart-shopping',
    tag: 'Online Stores',
    title: 'E-Commerce & Online Stores',
    desc: 'Custom online shops and digital product catalogs equipped with secure payment gateways, WhatsApp ordering, and effortless product management.',
    features: ['Product Catalog & Shopping Cart', 'Secure Payments (Razorpay, UPI, Stripe)', 'WhatsApp Direct Ordering', 'Order & Inventory Management']
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">
            Tailored Websites & Apps <br />
            <span className="text-gradient">Crafted For Your Business</span>
          </h2>
          <p className="section-subtitle">
            We build clean, reliable, and modern digital solutions to help your business reach more clients online.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {services.map((item, idx) => (
            <div key={idx} className="service-card" style={{
              background: 'var(--black-3)',
              border: '1px solid var(--black-5)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 30px',
              transition: 'var(--transition)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="card-badge" style={{
                fontSize: '12px',
                color: 'var(--yellow)',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                {item.tag}
              </div>

              <div className="card-icon" style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'var(--orange)',
                marginBottom: '22px'
              }}>
                <i className={`fas ${item.icon}`}></i>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '14px',
                color: 'var(--white)'
              }}>
                {item.title}
              </h3>

              <p style={{
                color: 'var(--gray-300)',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}>
                {item.desc}
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{
                    fontSize: '14px',
                    color: 'var(--gray-300)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-check" style={{ color: 'var(--orange)', fontSize: '12px' }}></i>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
