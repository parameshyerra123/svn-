import React, { useState } from 'react';

const reviews = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    company: 'FinTrack India',
    rating: 5,
    quote: 'SVN Solutions delivered our full-stack fintech platform 2 weeks ahead of schedule. Their attention to security, real-time data handling, and clean code is truly world-class.'
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Apex Digital UK',
    rating: 5,
    quote: 'Working with SVN Solutions felt like having an elite Silicon Valley tech team in our corner. The React Native app they built has a 4.9 rating on both App Store and Google Play.'
  },
  {
    name: 'Vikram Mehta',
    role: 'Managing Director',
    company: 'NextGen Retailers',
    rating: 5,
    quote: 'Our previous website struggled with cart dropoffs. SVN Solutions redesigned our store with custom Next.js and payment flows, increasing our revenue by 48% within 90 days.'
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => setCurrentIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const next = () => setCurrentIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            Trusted by Founders & <br />
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Here is what our global clients say about collaborating with SVN Solutions.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--black-3)',
            border: '1px solid var(--black-5)',
            borderRadius: 'var(--radius-lg)',
            padding: '44px 36px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', gap: '4px', color: 'var(--yellow)', marginBottom: '20px', fontSize: '18px' }}>
              {[...Array(reviews[currentIdx].rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--gray-100)',
              fontStyle: 'italic',
              marginBottom: '28px'
            }}>
              "{reviews[currentIdx].quote}"
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'var(--white)'
                }}>
                  {reviews[currentIdx].name}
                </h4>
                <p style={{ color: 'var(--orange)', fontSize: '14px', fontWeight: '500' }}>
                  {reviews[currentIdx].role} — {reviews[currentIdx].company}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={prev}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--black-4)',
                    border: '1px solid var(--black-5)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Previous Testimonial"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={next}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--black-4)',
                    border: '1px solid var(--black-5)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Next Testimonial"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
