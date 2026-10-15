import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Discovery & Product Roadmap',
    desc: 'We analyze your core business objectives, target users, and competitive landscape to define a clear scope and timeline.'
  },
  {
    step: '02',
    title: 'UI/UX & System Architecture',
    desc: 'We construct interactive prototypes in Figma and draft scalable database schemas and API specifications.'
  },
  {
    step: '03',
    title: 'Agile Coding & Rigorous Testing',
    desc: 'Fast 2-week bi-weekly sprints with continuous integration, automated unit testing, and direct client demos.'
  },
  {
    step: '04',
    title: 'Deployment, Launch & Support',
    desc: 'Clean, fast deployment to modern hosting platforms with mobile responsiveness checks, SEO optimization, and launch support.'
  }
];

export default function Process() {
  return (
    <section id="process" className="process-section" style={{ background: 'var(--black-2)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">
            From Concept to <br />
            <span className="text-gradient">Production-Grade Reality</span>
          </h2>
          <p className="section-subtitle">
            Our proven four-stage engineering methodology guarantees transparency, high velocity, and zero surprises.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((st, idx) => (
            <div key={idx} style={{
              background: 'var(--black-3)',
              border: '1px solid var(--black-5)',
              borderRadius: 'var(--radius)',
              padding: '32px 24px',
              position: 'relative'
            }}>
              <div style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '42px',
                fontWeight: '900',
                background: 'var(--grad-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                {st.step}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '12px',
                color: 'var(--white)'
              }}>
                {st.title}
              </h3>

              <p style={{
                color: 'var(--gray-300)',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
