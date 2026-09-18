import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { YBLogo } from '../common/YBLogo';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const Navbar = ({ onOpenSearch, onToggleMobileNav, isMobileNavOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const { totalItemsCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When on home page at top, navbar is transparent on dark hero
  const isTransparent = isHome && !scrolled && !isMobileNavOpen;
  const theme = isTransparent ? 'light' : 'dark';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--header-height)',
        zIndex: 'var(--z-header)',
        transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        backgroundColor: isTransparent ? 'transparent' : 'rgba(250, 249, 246, 0.94)',
        backdropFilter: isTransparent ? 'none' : 'blur(12px)',
        borderBottom: isTransparent ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid var(--border-subtle)',
        color: isTransparent ? 'var(--color-warm-white)' : 'var(--color-obsidian)'
      }}
    >
      <div
        className="container-luxury navbar-grid"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          gap: '1.5rem'
        }}
      >
        {/* Left: Desktop Logo & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={onToggleMobileNav}
            aria-label={isMobileNavOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="mobile-nav-toggle"
            style={{
              display: 'none',
              padding: '0.4rem',
              color: 'inherit',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {isMobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="desktop-logo-wrap">
            <YBLogo theme={theme} mode="full" size="sm" />
          </div>
        </div>

        {/* Center: Desktop Nav Links & Mobile Centered Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <nav
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.2rem, 2.2vw, 2.6rem)'
            }}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Shop
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Collections
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/journal"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Journal
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Contact
            </NavLink>
          </nav>

          <div className="mobile-logo-wrap" style={{ display: 'none' }}>
            <YBLogo theme={theme} mode="full" size="sm" />
          </div>
        </div>

        {/* Right: Actions (Search, Account, Wishlist, Cart) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.25rem' }}>
          <button
            onClick={onOpenSearch}
            aria-label="Search Catalog"
            style={{
              padding: '0.4rem',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s ease',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Search size={18} strokeWidth={1.6} />
          </button>

          <NavLink
            to="/account"
            aria-label="Client Account"
            style={{
              padding: '0.4rem',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <User size={18} strokeWidth={1.6} />
          </NavLink>

          <NavLink
            to="/wishlist"
            aria-label={`Wishlist (${wishlistCount} items)`}
            style={{
              padding: '0.4rem',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <Heart size={18} strokeWidth={1.6} />
            {wishlistCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-3px',
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-obsidian)',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {wishlistCount}
              </span>
            )}
          </NavLink>

          <button
            onClick={openCart}
            aria-label={`Shopping Bag (${totalItemsCount} items)`}
            style={{
              padding: '0.4rem',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            data-cursor="BAG"
          >
            <ShoppingBag size={18} strokeWidth={1.6} />
            {totalItemsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-3px',
                  backgroundColor: isTransparent ? 'var(--color-gold)' : 'var(--color-obsidian)',
                  color: isTransparent ? 'var(--color-obsidian)' : 'var(--color-warm-white)',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .navbar-grid {
            grid-template-columns