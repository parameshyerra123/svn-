import React, { useState } from 'react';

const faqs = [
  {
    q: 'What kind of projects does SVN Solutions build?',
    a: 'We specialize in modern responsive websites (React, HTML5, CSS3, JavaScript), mobile applications (iOS and Android), e-commerce stores with WhatsApp ordering, business landing pages, and custom web applications.'
  },
  {
    q: 'How long does a typical website project take?',
    a: 'A custom business landing page or portfolio typically takes 3 to 7 days. Full-featured e-commerce stores and custom web applications usually take 2 to 4 weeks depending on features and design complexity.'
  },
  {
    q: 'How does payment and pricing work?',
    a: 'We offer straightforward, milestone-based pricing with no hidden charges. Payments are structured upon deliverables so you always see progress before final handover.'
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes! We provide dedicated post-launch support including bug fixes, minor content updates, speed optimization, and assistance to keep your website running smoothly.'
  },
  {
    q: 'Who owns the website source code and design?',
    a: 'You do 100%. Upon project completion, all source code, assets, design files, and credentials belong completely to you.'
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
