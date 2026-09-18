import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Concierge Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SeoMeta
        title="Contact & Private Salons | YB EVERYDAY / JEDEN"
        description="Connect with the YB Concierge for private appointments, custom jewelry commissions, bespoke Optique fitting, and worldwide client services."
        canonical="/contact"
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '7rem' }}>
        <div className="container-luxury">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              Atelier Concierge
            </span>
            <h1 className="editorial-title-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Let's Connect
            </h1>
            <p className="editorial-subheading" style={{ maxWidth: '600px', margin: '0.75rem auto 0' }}>
              Our private concierge assists with bespoke commissions, salon appointments, and order inquiries.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'flex-start'
            }}
          >
            {/* Left Column: Direct Channels & Salons */}
            <div>
              <div style={{ marginBottom: '3rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.03em'
                  }}
                >
                  Direct Client Services
                </h2>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-soft-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        Client Email
                      </div>
                      <a href="mailto:concierge@ybeveryday.com" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-obsidian)', fontWeight: 500 }}>
                        concierge@ybeveryday.com
                      </a>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-soft-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        Instant WhatsApp VIP Service
                      </div>
                      <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-gold-dark)', fontWeight: 500 }}>
                        +234 (0) 800 923 3336
                      </a>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-soft-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        Concierge Operating Hours
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--color-obsidian)', marginTop: '0.2rem' }}>
                        Monday – Saturday: 09:00 – 19:00 (WAT / GMT+1)
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Atelier Locations */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.03em'
                  }}
                >
                  By Private Appointment
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Lagos Flagship Atelier
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.2rem' }}>
                      14 Alexander Avenue, Old Ikoyi, Lagos, Nigeria
                    </p>
                  </div>

                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      London Private Salon
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.2rem' }}>
                      28 Berkeley Square, Mayfair, London W1J 6EN, United Kingdom
                    </p>
                  </div>

                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Paris Showroom
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.2rem' }}>
                      Place Vendôme, 75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle size={48} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Thank you, {formData.name}. A member of the YB Private Concierge team will review your message and reply within 4 business hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Concierge Inquiry', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Send an Inquiry
                  </h3>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander Oladipo"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'transparent',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@domain.com"
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          border: '1px solid var(--border-medium)',
                          backgroundColor: 'transparent',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          border: '1px solid var(--border-medium)',
                          backgroundColor: 'transparent',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                      Subject of Inquiry
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'transparent',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    >
                      <option value="General Concierge Inquiry">General Concierge Inquiry</option>
                      <option value="Private Salon Booking">Private Salon Booking (Lagos / London)</option>
                      <option value="Bespoke Jewelry Commission">Bespoke Jewelry Commission</option>
                      <option value="Order Tracking & Logistics">Order Tracking & Logistics</option>
                      <option value="Press & Editorial Inquiries">Press & Editorial Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your request or appointment preference..."
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'transparent',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    fullWidth
                    style={{ marginTop: '0.5rem' }}
                  >
                    {loading ? 'Transmitting Request...' : 'Send Inquiry to Concierge'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
