import React, { useState, useEffect } from 'react';

const words = [
  'Modern Websites',
  'iOS & Android Apps',
  'E-Commerce Stores',
  'UI/UX Experience',
  'Custom Web Apps'
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      <div className="container hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Professional Web & Mobile App Development</span>
        </div>

        <h1 className="hero-title">
          Engineering High-Impact <br />
          <span className="text-gradient dynamic-word">{displayText}</span>
          <span className="cursor-blink">|</span>
        </h1>

        <p className="hero-subtitle">
          SVN Solutions crafts clean, high-performance websites and intuitive mobile applications.
          We build custom business websites, online stores, and digital tools tailored to grow your brand.
        </p>

        <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary btn-lg">
            <i className="fas fa-rocket"></i> Launch Your Project
          </a>
          <a href="#services" className="btn-outline btn-lg">
            <i className="fas fa-layer-group"></i> Explore Services
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Mobile Responsive</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">⚡ Fast</div>
            <div className="stat-label">Page Speed & SEO</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Clean</div>
            <div className="stat-label">Modern Code & UI</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Direct</div>
            <div className="stat-label">Personal Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
