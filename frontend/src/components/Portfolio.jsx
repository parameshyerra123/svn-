import React, { useState } from 'react';

const categories = ['All', 'Websites', 'E-Commerce', 'Landing Pages', 'Portfolios'];

const projects = [
  {
    title: 'Apex Consulting - Corporate Business Website',
    category: 'Websites',
    desc: 'Clean, responsive corporate website built for a business consulting agency featuring interactive service showcases, contact inquiry forms, and Google Map integration.',
    techs: ['React', 'CSS3', 'Vite', 'Responsive'],
    metric: '⚡ 1.1s Load Time'
  },
  {
    title: 'Urban Bloom - Boutique E-Commerce Store',
    category: 'E-Commerce',
    desc: 'Modern online clothing and accessory store with responsive product catalog, instant cart, direct WhatsApp order checkout, and UPI payment buttons.',
    techs: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
    metric: '🛍️ WhatsApp Order'
  },
  {
    title: 'The Rustic Fork - Cafe & Restaurant Website',
    category: 'Websites',
    desc: 'Appetizing, visual website for a dining cafe featuring a categorized digital food menu, opening hours, table reservation inquiry form, and location map.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps'],
    metric: '🍽️ Digital Menu'
  },
  {
    title: 'Elena Vance - Creative Designer Portfolio',
    category: 'Portfolios',
    desc: 'Minimalist personal branding website for a freelance designer with sleek dark mode aesthetics, interactive work showcase, and instant inquiry form.',
    techs: ['React', 'Vanilla CSS', 'EmailJS'],
    metric: '🎨 Dark Aesthetic'
  },
  {
    title: 'IronCore - Fitness Studio Landing Page',
    category: 'Landing Pages',
    desc: 'High-energy landing page for a local gym and fitness studio showcasing class schedules, membership pricing tiers, trainer bios, and trial registration.',
    techs: ['React', 'CSS Grid', 'Vite'],
    metric: '📱 Mobile Optimized'
  },
  {
    title: 'BrightSmile - Dental Clinic Web Portal',
    category: 'Landing Pages',
    desc: 'Trustworthy, clean medical practice website with doctor credentials, treatment guides, patient FAQs, and online appointment booking request.',
    techs: ['React', 'Express', 'MongoDB Atlas'],
    metric: '📅 Appointment Form'
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
          <span className="section-tag">Recent Work</span>
          <h2 className="section-title">
            Websites & Web Apps <br />
            <span className="text-gradient">Built For Real Businesses</span>
          </h2>
          <p className="section-subtitle">
            Explore some of the responsive websites, e-commerce stores, and digital landing pages we have designed and built.
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
