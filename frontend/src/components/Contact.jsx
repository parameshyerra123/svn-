import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web Application Development',
    budget: '$1,000 - $5,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      // If dev proxy or server is momentarily unreachable
      setError('Unable to reach the server. Please call or WhatsApp us directly at +91 63002 40474.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">
            Have a Project in Mind? <br />
            <span className="text-gradient">Let's Build It Together</span>
          </h2>
          <p className="section-subtitle">
            Fill out the form below to receive a comprehensive proposal and estimate within 24 hours.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Contact Details Card */}
          <div style={{
            background: 'var(--black-3)',
            border: '1px solid var(--black-5)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 30px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'var(--white)'
            }}>
              Direct Communication
            </h3>
            <p style={{ color: 'var(--gray-300)', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
              We are available for calls, strategy sessions, and WhatsApp chats. Reach out directly anytime.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="tel:+916300240474" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: 'var(--white)',
                textDecoration: 'none'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 107, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--orange)',
                  fontSize: '18px'
                }}>
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-300)', textTransform: 'uppercase' }}>Phone & WhatsApp</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>+91 63002 40474</div>
                </div>
              </a>

              <a href="mailto:parameshyarra80@gmail.com" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: 'var(--white)',
                textDecoration: 'none'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 202, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--yellow)',
                  fontSize: '18px'
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-300)', textTransform: 'uppercase' }}>Email Inquiry</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>parameshyarra80@gmail.com</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gray-300)',
                  fontSize: '18px'
                }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-300)', textTransform: 'uppercase' }}>Headquarters</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>India (Global Remote Delivery)</div>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '36px',
              padding: '20px',
              borderRadius: 'var(--radius)',
              background: 'rgba(255, 107, 0, 0.08)',
              border: '1px solid rgba(255, 107, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--yellow)', fontWeight: '600', marginBottom: '6px' }}>
                <i className="fas fa-database"></i> MongoDB Atlas Connected
              </div>
              <p style={{ color: 'var(--gray-300)', fontSize: '13px', margin: 0 }}>
                Every submission is securely stored in real-time in our high-availability database cluster.
              </p>
            </div>
          </div>

          {/* Form / Success Screen */}
          <div style={{
            background: 'var(--black-3)',
            border: '1px solid var(--black-5)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 30px'
          }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(255, 107, 0, 0.2)',
                  color: 'var(--orange)',
                  fontSize: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <i className="fas fa-check"></i>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '26px',
                  fontWeight: '700',
                  marginBottom: '12px'
                }}>
                  Inquiry Received! 🎉
                </h3>
                <p style={{ color: 'var(--gray-300)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your project specifications have been logged into our database. Our technical team will review and reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Custom Web Application Development',
                      budget: '$1,000 - $5,000',
                      message: ''
                    });
                  }}
                  className="btn-primary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {error && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 68, 68, 0.1)',
                    border: '1px solid rgba(255, 68, 68, 0.3)',
                    color: '#ff6666',
                    fontSize: '14px'
                  }}>
                    {error}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: 'var(--gray-300)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Paramesh Yerra"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--black-4)',
                      border: '1px solid var(--black-5)',
                      borderRadius: '8px',
                      color: 'var(--white)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: 'var(--gray-300)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--black-4)',
                        border: '1px solid var(--black-5)',
                        borderRadius: '8px',
                        color: 'var(--white)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: 'var(--gray-300)' }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 63002 40474"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--black-4)',
                        border: '1px solid var(--black-5)',
                        borderRadius: '8px',
                        color: 'var(--white)',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: 'var(--gray-300)' }}>
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--black-4)',
                        border: '1px solid var(--black-5)',
                        borderRadius: '8px',
                        color: 'var(--white)',
                        outline: 'none'
                      }}
                    >
                      <option>Custom Web Application Development</option>
                      <option>iOS & Android App Development</option>
                      <option>UI/UX & Interactive Design</option>
                      <option>E-Commerce & Payment Gateways</option>
                      <option>Cloud, DevOps & Microservices</option>
                      <option>24/7 Dedicated Support & Security</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: 'var(--gray-300)' }}>
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--black-4)',
                        border: '1px solid var(--black-5)',
                        borderRadius: '8px',
                        color: 'var(--white)',
                        outline: 'none'
                      }}
                    >
                      <option>Under $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: 'var(--gray-300)' }}>
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, desired features, and timeline..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--black-4)',
                      border: '1px solid var(--black-5)',
                      borderRadius: '8px',
                      color: 'var(--white)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                >
                  {loading ? (
                    <span>
                      <i className="fas fa-spinner fa-spin"></i> Submitting to Database...
                    </span>
                  ) : (
                    <span>
                      <i className="fas fa-paper-plane"></i> Send Project Inquiry
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
