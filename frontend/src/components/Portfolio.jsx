import React, { useState } from 'react';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'E-Commerce', 'SaaS'];

const projects = [
  {
    title: 'NexPay - Global Fintech Dashboard',
    category: 'Web Apps',
    desc: 'Enterprise multi-currency payment platform handling real-time crypto & fiat transactions with sub-second latency.',
    techs: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metric: '99.99% Uptime | $12M+ Volume'
  },
  {
    title: 'PulseFit - AI Fitness & Health App',
    category: 'Mobile Apps',
    desc: 'Cross-platform mobile application utilizing on-device pose estimation, workout analytics, and live audio coaching.',
    techs: ['React Native', 'TensorFlow Lite', 'Express', 'MongoDB'],
    metric: '500K+ Active Users'
  },
  {
    title: 'Aura Luxe - Fashion & Apparel Store',
    category: 'E-Commerce',
    desc: 'High-conversion headless e-commerce store with 3D product previews, instant checkout, and automated fulfillment.',
    techs: ['Next.js', 'Stripe', 'Tailwind', 'Node.js'],
    metric: '+42% Checkout Conversion'
  },
  {
    title: 'CloudOps - Kubernetes Monitoring Suite',
    category: 'SaaS',
    desc: 'Centralized telemetry SaaS for devops teams to visualize clusters, track error budgets, and automate incident alerts.',
    techs: ['React.js', 'Go API', 'TimescaleDB', 'Docker'],
    metric: 'Used by 80+ Tech Teams'
  },
  {
    title: 'CareSync - Telemedicine & Patient Portal',
    category: 'Web Apps',
    desc: 'HIPAA-compliant healthcare platform featuring WebRTC video consults, digital prescriptions, and EHR integration.',
    techs: ['React', 'WebRTC', 'MongoDB Atlas', 'AWS'],
    metric: '25,000+ Consultations'
  },
  {
    title: 'FleetTrack - Real-Time Logistics App',
    category: 'Mobile Apps',
    desc: 'Real-time GPS tracking and route optimization app for logistics drivers with offline route sync and dispatching.',
    techs: ['Flutter', 'Google Maps API', 'Node.js', 'Redis'],
    metric: '30% Fuel Cost Reduction'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">
            Featured Projects & <br />
            <span className="text-gradient">Proven Milestones</span>
          </h2>
          <p className="section-subtitle">
            Take a look at how we engineered modern digital products that delivered measurable business value.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '32px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'var(--orange)' : 'var(--black-3)',
                  color: activeCategory === cat ? '#000' : 'var(--white)',
                  border: `1px solid ${activeCategory === cat ? 'var(--orange)' : 'var(--black-5)'}`,
                  padding: '10px 22px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {filteredProjects.map((proj, idx) => (
            <div key={idx} style={{
              background: 'var(--black-3)',
              border: '1px solid var(--black-5)',
              borderRadius: 'var(--radius-lg)',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--transition)'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--orange)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {proj.category}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: 'var(--yellow)',
                    background: 'rgba(255, 202, 0, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 202, 0, 0.2)'
                  }}>
                    {proj.metric}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'var(--white)'
                }}>
                  {proj.title}
                </h3>

                <p style={{
                  color: 'var(--gray-300)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '22px'
                }}>
                  {proj.desc}
                </p>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {proj.techs.map((t, tIdx) => (
                    <span key={tIdx} style={{
                      fontSize: '12px',
                      background: 'var(--black-4)',
                      color: 'var(--gray-100)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid var(--black-5)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--orange)',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  Request Similar Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
