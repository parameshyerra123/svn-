import React from 'react';

const services = [
  {
    icon: 'fa-laptop-code',
    tag: 'Web Solutions',
    title: 'Custom Web Application Development',
    desc: 'High-performance, responsive web applications engineered with React, Next.js, and Node.js. Built for speed, SEO, and massive scalability.',
    features: ['Single Page Apps (SPAs)', 'Full-Stack MERN Architecture', 'Custom Admin Dashboards', 'Headless CMS Integration']
  },
  {
    icon: 'fa-mobile-screen-button',
    tag: 'Mobile Apps',
    title: 'iOS & Android App Development',
    desc: 'Native and cross-platform mobile apps using React Native and Flutter. Flawless animations, native device features, and offline sync.',
    features: ['Cross-Platform React Native', 'iOS & Android Store Deployment', 'Real-time Push Notifications', 'Biometric & Secure Storage']
  },
  {
    icon: 'fa-compass-drafting',
    tag: 'Experience Design',
    title: 'UI/UX & Interactive Design',
    desc: 'Bespoke user interfaces crafted with precision in Figma. Designed to maximize user engagement, retention, and conversion rates.',
    features: ['High-Fidelity Wireframes', 'Interactive Clickable Prototypes', 'Complete Design Systems', 'User Research & Journey Mapping']
  },
  {
    icon: 'fa-cart-shopping',
    tag: 'E-Commerce',
    title: 'E-Commerce & Payment Gateways',
    desc: 'Tailor-made e-commerce portals, subscription engines, and automated checkout experiences with Stripe, Razorpay, and PayPal integration.',
    features: ['Custom Checkout Workflows', 'Multi-Currency & Gateways', 'Inventory & Order Tracking', 'Automated Invoicing & Tax']
  },
  {
    icon: 'fa-cloud',
    tag: 'Cloud & Infrastructure',
    title: 'Cloud, DevOps & Microservices',
    desc: 'Scalable cloud infrastructure on AWS, Google Cloud, and Docker. Zero-downtime CI/CD deployment pipelines with enterprise security.',
    features: ['Containerization with Docker', 'CI/CD Automated Pipelines', 'Database Optimization & Backups', 'Serverless & Microservices']
  },
  {
    icon: 'fa-shield-halved',
    tag: 'Maintenance & Care',
    title: '24/7 Dedicated Support & Security',
    desc: 'Round-the-clock server monitoring, continuous feature updates, automated security audits, and dedicated SLA support.',
    features: ['99.9% Uptime Guarantee', 'Proactive Threat Monitoring', 'Performance Tuning & Audits', 'Dedicated Senior Engineer Support']
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Build</span>
          <h2 className="section-title">
            Engineered For Impact, <br />
            <span className="text-gradient">Built For Growth</span>
          </h2>
          <p className="section-subtitle">
            We deliver end-to-end digital solutions tailored to solve complex business challenges with modern software engineering.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
