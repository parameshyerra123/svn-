import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <div className="logo-text">
            <span className="logo-name">SVN SOLUTIONS</span>
            <span className="logo-sub">SOFTWARE & APP INNOVATION</span>
          </div>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#process" className="nav-link" onClick={closeMenu}>Process</a></li>
          <li><a href="#testimonials" className="nav-link" onClick={closeMenu}>Reviews</a></li>
          <li><a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a href="tel:+916300240474" className="btn-outline btn-sm" style={{ display: 'none', md: 'inline-flex' }}>
            <i className="fas fa-phone"></i> +91 63002 40474
          </a>
          <a href="#contact" className="btn-primary btn-sm">
            <i className="fas fa-paper-plane"></i> Get Quote
          </a>
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
