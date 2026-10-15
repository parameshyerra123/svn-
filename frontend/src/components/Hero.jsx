import React, { useState, useEffect } from 'react';

const words = [
  'Modern Web Apps',
  'iOS & Android Apps',
  'Full-Stack SaaS',
  'UI/UX Experience',
  'Cloud Architecture'
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
          <span>Premier Software & App Development Studio</span>
        </div>

        <h1 className="hero-title">
          Engineering High-Impact <br />
          <span className="text-gradient dynamic-word">{displayText}</span>
          <span className="cursor-blink">|</span>
        </h1>

        <p className="hero-subtitle">
          SVN Solutions transforms bold visions into robust, scalable digital realities.
          We architect cutting-edge web applications, native & hybrid mobile apps, and enterprise software that outperform the competition.
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
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99.4%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Dedicated Support</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years of Mastery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
