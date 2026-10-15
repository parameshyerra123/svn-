import React, { useState } from 'react';

const faqs = [
  {
    q: 'What kind of projects does SVN Solutions build?',
    a: 'We specialize in custom web applications (React, Next.js, Node.js), mobile applications (iOS and Android via React Native & Flutter), enterprise dashboards, e-commerce platforms, and scalable cloud APIs.'
  },
  {
    q: 'How long does a typical software project take?',
    a: 'A rapid MVP typically takes between 2 to 4 weeks. Medium to large enterprise platforms usually range from 6 to 12 weeks depending on scope, integrations, and compliance requirements.'
  },
  {
    q: 'How does payment and billing work?',
    a: 'We work on milestone-based fixed pricing or flexible bi-weekly agile sprint models. Payments are structured upon deliverables so you always see working software before release.'
  },
  {
    q: 'Do you offer ongoing maintenance and support after launch?',
    a: 'Yes! We provide dedicated SLA maintenance packages including 24/7 server monitoring, performance audits, automated backups, and continuous feature development.'
  },
  {
    q: 'Who owns the intellectual property (IP) and source code?',
    a: 'You do 100%. Upon completion and milestone settlement, all source code, assets, design files, and documentation belong completely to your company.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="faq-section" style={{ background: 'var(--black-2)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Common Inquiries</span>
          <h2 className="section-title">
            Frequently Asked <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about partnering with SVN Solutions for your next build.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--black-3)',
                border: '1px solid var(--black-5)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                transition: 'var(--transition)'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '22px 24px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '17px',
                  fontWeight: '600'
                }}
              >
                <span>{faq.q}</span>
                <i
                  className={`fas fa-chevron-${openIdx === idx ? 'up' : 'down'}`}
                  style={{ color: 'var(--orange)', fontSize: '14px', marginLeft: '16px' }}
                ></i>
              </button>

              {openIdx === idx && (
                <div style={{ padding: '0 24px 22px', color: 'var(--gray-300)', fontSize: '15px', lineHeight: '1.7' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
