import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { YBLogo } from '../common/YBLogo';
import { CATEGORIES } from '../../data/products';

export const MobileNav = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const ctx = gsap.context(() => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        );

        const items = containerRef.current.querySelectorAll('.mobile-stagger-item');
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out', delay: 0.15 }
        );
      }, containerRef);

      return () => {
        document.body.style.overflow = '';
        ctx.revert();
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-warm-white)',
        zIndex: 'var(--z-drawer)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        padding: '1.5rem clamp(1.5rem, 5vw, 3rem)'
      }}
    >
      {/* Top bar with brand mark and close button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <YBLogo theme="light" mode="mark" size="sm" to="/" onClick={onClose} />
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            color: 'var(--color-warm-white)',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          <span>Close</span>
          <X size={20} />
        </button>
      </div>

      {/* Main Navigation links */}
      <div
        ref={linksRef}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2.5rem 0'
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { label: 'Shop All Objects', to: '/shop' },
            { label: 'Collections', to: '/collections' },
            { label: 'The Philosophy', to: '/about' },
            { label: 'Editorial Journal', to: '/journal' },
            { label: 'Private Concierge', to: '/contact' },
            { label: 'Client Account', to: '/account' },
            { label: 'Saved Wishlist', to: '/wishlist' }
          ].map((item, idx) => (
            <div key={idx} className="mobile-stagger-item">
              <NavLink
                to={item.to}
                onClick={onClose}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
                  fontWeight: 300,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--color-warm-white)'
                }}
              >
                <span>{item.label}</span>
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Category Quick Access */}
        <div
          className="mobile-stagger-item"
          style={{
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
            Departments
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <NavLink
              to="/shop/jewelry"
              onClick={onClose}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-warm-white)'
              }}
            >
              Jewelry
            </NavLink>
            <NavLink
              to="/shop/eyewear"
              onClick={onClose}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-warm-white)'
              }}
            >
              Sunglasses
            </NavLink>
            <NavLink
              to="/shop/optical"
              onClick={onClose}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-warm-white)'
              }}
            >
              Optical Frames
            </NavLink>
            <NavLink
              to="/shop/accessories"
              onClick={onClose}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-warm-white)'
              }}
            >
              Accessories
            </NavLink>
          </div>
        </div>
      </div>

      {/* Footer information */}
      <div
        style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-inverse-muted)'
        }}
      >
        <span>Lagos · London · Paris</span>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-warm-white)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <Instagram size={15} />
            <span>@ybeveryday</span>
          </a>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <MessageCircle size={15} />
            <span>Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
