import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Instagram, Twitter } from 'lucide-react';
import { YBLogo } from '../common/YBLogo';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-warm-white)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container-luxury">
        {/* Top Section: Newsletter and Brand Lockup */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Left Column: Brand Lockup & Philosophy */}
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <YBLogo theme="light" mode="full" size="lg" />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                lineHeight: 1.5,
                color: 'var(--text-inverse-muted)',
                maxWidth: '440px',
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}
            >
              “YB is not about wearing more. It is about wearing what means something.”
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)'
              }}
            >
              <span>Lagos</span>
              <span>·</span>
              <span>London</span>
              <span>·</span>
              <span>Paris</span>
            </div>
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div>
            <div className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
              Private Client Dispatch
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                fontWeight: 300,
                marginBottom: '1rem'
              }}
            >
              Stay in the Light
            </h3>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-inverse-muted)',
                lineHeight: 1.6,
                maxWidth: '460px',
                marginBottom: '1.75rem'
              }}
            >
              Receive early invitations to limited edition releases, editorial essays from the Journal, and private salon appointments.
            </p>

            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(184, 155, 94, 0.12)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-gold)',
                  fontSize: '0.85rem'
                }}
              >
                <Check size={18} />
                <span>You are now entered into the YB private circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', maxWidth: '460px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRight: 'none',
                    padding: '0.9rem 1.25rem',
                    color: 'var(--color-warm-white)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  style={{
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-obsidian)',
                    padding: '0 1.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.3s ease'
                  }}
                  data-cursor="JOIN"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Section: Navigation & Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            padding: '3.5rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Column 1: Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <li>
                <Link to="/shop" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Shop All Objects
                </Link>
              </li>
              <li>
                <Link to="/collections" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Lookbook Collections
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  The YB Philosophy
                </Link>
              </li>
              <li>
                <Link to="/journal" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Editorial Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Concierge & Salons
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Departments */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Departments
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <li>
                <Link to="/shop/jewelry" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Fine & Daily Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop/eyewear" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Sculpted Sunglasses
                </Link>
              </li>
              <li>
                <Link to="/shop/optical" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Beta-Titanium Optical
                </Link>
              </li>
              <li>
                <Link to="/shop/accessories" style={{ color: 'var(--color-warm-white)', transition: 'color 0.2s' }}>
                  Timepieces & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Client Concierge
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <li>
                <Link to="/journal/jewelry-care-guide" style={{ color: 'var(--color-warm-white)' }}>
                  Metals & Care Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--color-warm-white)' }}>
                  Shipping & Customs
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--color-warm-white)' }}>
                  Bespoke Appointments
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ color: 'var(--color-warm-white)' }}>
                  Order Status & Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Direct Connection */}
          <div>
            <h4
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1.25rem'
              }}
            >
              Connect
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-warm-white)' }}
                >
                  <Instagram size={15} />
                  <span>Instagram @ybeveryday</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-warm-white)' }}
                >
                  <span>TikTok @ybjeden</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-warm-white)' }}
                >
                  <Twitter size={15} />
                  <span>X / Twitter @ybeveryday</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-gold)', fontWeight: 500 }}
                >
                  Direct WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.75rem',
            color: 'var(--text-inverse-muted)'
          }}
        >
          <div>
            <span>© 2026 YB EVERYDAY / JEDEN. ALL RIGHTS RESERVED. RADIANCE.</span>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
