/**
 * SVN Solutions - Main JavaScript
 * Features: Preloader, Custom Cursor, Navbar Scroll, Typed Text,
 *           Counter Animation, Scroll Reveal, Portfolio Filter,
 *           Testimonials Slider, Contact Form with Backend API,
 *           FAQ Accordion, Back to Top
 */

// ===== CONFIG =====
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000/api'
  : '/api';

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initNavbar();
  initTypedText();
  initScrollReveal();
  initCounters();
  initPortfolioFilter();
  initTestimonials();
  initContactForm();
  initFAQ();
  initBackToTop();
  initSmoothScroll();
  initActiveNavLinks();
  setCurrentYear();
  initWhatsApp();
});

// ===== PRELOADER =====
function initPreloader() {
  document.body.classList.add('loading');
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 2000);
  });

  // Fallback in case load event doesn't fire
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) {
      preloader.classList.add('hidden');
      document.body.classList.remove('loading');
    }
  }, 4000);
}

// ===== CUSTOM CURSOR =====
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Smooth follower
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Cursor effects on interactive elements
  const interactiveEls = document.querySelectorAll('a, button, .service-card, .portfolio-item, .filter-btn, input, textarea, select');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      cursor.style.background = 'var(--yellow)';
      follower.style.width = '48px';
      follower.style.height = '48px';
      follower.style.borderColor = 'rgba(255, 202, 0, 0.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.background = 'var(--orange)';
      follower.style.width = '32px';
      follower.style.height = '32px';
      follower.style.borderColor = 'rgba(255, 107, 0, 0.5)';
    });
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
  });
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  }
}

// ===== ACTIVE NAV LINKS ON SCROLL =====
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
}

// ===== TYPED TEXT =====
function initTypedText() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const texts = [
    'Experiences',
    'Applications',
    'Solutions',
    'Platforms',
    'Futures'
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 120;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      delay = 60;
    } else {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      delay = 120;
    }

    if (!isDeleting && charIndex === currentText.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.service-card, .portfolio-item, .process-step, .pricing-card, ' +
    '.testimonial-card, .about-content, .about-visual, .contact-info, ' +
    '.contact-form-wrap, .section-header, .stat-item, .feature-item, ' +
    '.contact-card, .footer-col'
  );

  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 16);

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

// ===== PORTFOLIO FILTER =====
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Add transition to items
  portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });
}

// ===== TESTIMONIALS SLIDER =====
function initTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  if (!cards.length) return;

  let current = 0;
  let autoplayTimer;

  function showSlide(index) {
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    cards[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % cards.length);
  }

  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      stopAutoplay();
      showSlide(index);
      startAutoplay();
    });
  });

  startAutoplay();

  // Touch/swipe support
  const slider = document.getElementById('testimonials-slider');
  if (slider) {
    let startX = 0;
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
    slider.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        stopAutoplay();
        if (diff > 0) {
          showSlide((current + 1) % cards.length);
        } else {
          showSlide((current - 1 + cards.length) % cards.length);
        }
        startAutoplay();
      }
    });
  }
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn?.querySelector('.btn-text');
  const btnLoading = submitBtn?.querySelector('.btn-loading');
  const formSuccess = document.getElementById('form-success');

  // Real-time validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const serviceSelect = document.getElementById('service');

  function showError(id, msg) {
    const errorEl = document.getElementById(id + '-error');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('visible');
    }
    const input = document.getElementById(id);
    if (input) input.style.borderColor = 'rgba(255, 68, 68, 0.6)';
  }

  function clearError(id) {
    const errorEl = document.getElementById(id + '-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
    const input = document.getElementById(id);
    if (input) input.style.borderColor = '';
  }

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length > 1) clearError('name');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value)) clearError('email');
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length > 9) clearError('message');
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear all errors
    ['name', 'email', 'service', 'message'].forEach(clearError);

    // Validate
    let isValid = true;
    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const service = serviceSelect?.value;
    const message = messageInput?.value.trim();

    if (!name || name.length < 2) {
      showError('name', 'Please enter your full name (at least 2 characters)');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError('email', 'Please enter a valid email address');
      isValid = false;
    }

    if (!service) {
      showError('service', 'Please select a service');
      isValid = false;
    }

    if (!message || message.length < 10) {
      showError('message', 'Please describe your project (at least 10 characters)');
      isValid = false;
    }

    if (!isValid) return;

    // Show loading state
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.style.display = 'flex';

    const formData = {
      name,
      email,
      phone: document.getElementById('phone')?.value?.trim() || '',
      service,
      budget: document.getElementById('budget')?.value || '',
      message
    };

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Show success
        form.reset();
        form.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';

        // Track conversion (analytics)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_form_submit', { event_category: 'engagement' });
        }
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (err) {
      console.error('Form submission error:', err);

      // Show user-friendly error
      const errorMsg = err.message.includes('fetch')
        ? 'Unable to connect to server. Please email us directly at contact@svnsolutions.com'
        : err.message;

      // Create inline error
      let inlineError = form.querySelector('.inline-error');
      if (!inlineError) {
        inlineError = document.createElement('div');
        inlineError.className = 'form-error inline-error visible';
        inlineError.style.cssText = 'text-align: center; padding: 12px; background: rgba(255,68,68,0.05); border: 1px solid rgba(255,68,68,0.2); border-radius: 8px; font-size: 14px;';
        form.appendChild(inlineError);
      }
      inlineError.textContent = errorMsg;

      // Restore button
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.style.display = 'flex';
      if (btnLoading) btnLoading.style.display = 'none';
    }
  });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        faqItems.forEach(f => f.classList.remove('open'));

        // Open clicked if it was closed
        if (!isOpen) item.classList.add('open');
      });
    }
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== SET CURRENT YEAR =====
function setCurrentYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ===== WHATSAPP FLOAT =====
function initWhatsApp() {
  const phone = '919876543210'; // Update with real number (country code + number, no +)
  const message = encodeURIComponent('Hello SVN Solutions! I would like to discuss a project.');

  const whatsappEl = document.getElementById('social-whatsapp');
  if (whatsappEl) {
    whatsappEl.href = `https://wa.me/${phone}?text=${message}`;
    whatsappEl.target = '_blank';
    whatsappEl.rel = 'noopener noreferrer';
  }
}

// ===== PARALLAX EFFECT ON HERO ORBS =====
window.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.hero-orb');
  const { clientX, clientY } = e;
  const xPercent = (clientX / window.innerWidth - 0.5) * 20;
  const yPercent = (clientY / window.innerHeight - 0.5) * 20;

  orbs.forEach((orb, i) => {
    const factor = (i + 1) * 0.4;
    orb.style.transform = `translate(${xPercent * factor}px, ${yPercent * factor}px)`;
  });
});

// ===== NAVBAR ACTIVE ON SCROLL (Throttled) =====
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) return;
  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
    // Additional scroll-based logic can go here
  }, 100);
});

// ===== SERVICE CARDS HOVER TILT =====
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    card.style.transition = 'transform 0.4s ease';
  });
});

// ===== COOKIE CONSENT =====
(function() {
  if (!localStorage.getItem('svn_cookies_accepted')) {
    const banner = document.querySelector('.cookie-banner');
    if (banner) {
      setTimeout(() => banner.classList.add('visible'), 3000);

      const acceptBtn = banner.querySelector('#cookie-accept');
      const declineBtn = banner.querySelector('#cookie-decline');

      if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
          localStorage.setItem('svn_cookies_accepted', 'true');
          banner.classList.remove('visible');
        });
      }
      if (declineBtn) {
        declineBtn.addEventListener('click', () => {
          banner.classList.remove('visible');
        });
      }
    }
  }
})();

console.log('%cSVN Solutions', 'color: #ff6b00; font-size: 24px; font-weight: bold;');
console.log('%cBuilding digital experiences that scale. 🚀', 'color: #ffca00; font-size: 14px;');
