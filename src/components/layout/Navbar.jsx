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
      if (window.scrollY > 30) {
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
      className={`luxury-navbar ${isTransparent ? 'navbar-transparent' : 'navbar-scrolled'}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--header-height)',
        zIndex: 'var(--z-header)',
        transition: 'background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        backgroundColor: isTransparent ? 'transparent' : 'rgba(250, 249, 246, 0.96)',
        backdropFilter: isTransparent ? 'none' : 'blur(16px)',
        borderBottom: isTransparent ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid var(--border-subtle)',
        color: isTransparent ? 'var(--color-warm-white)' : 'var(--color-obsidian)'
      }}
    >
      <div
        className="container-luxury navbar-inner"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        {/* Left Column: Desktop Logo & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={onToggleMobileNav}
            aria-label={isMobileNavOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="mobile-nav-toggle nav-icon-btn"
          >
            {isMobileNavOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>

          <div className="desktop-logo-wrap">
            <YBLogo theme={theme} mode="full" size="sm" />
          </div>
        </div>

        {/* Center Column: Desktop Navigation Links & Mobile Centered Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <nav
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 1.8vw, 2.2rem)'
            }}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Shop
            </NavLink>
            <NavLink
              to="/collections/jeden"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Jeden
            </NavLink>
            <NavLink
              to="/shop/optique"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              L'Optique
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Collections
            </NavLink>
            <NavLink
              to="/journal"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Journal
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
          </nav>

          <div className="mobile-logo-wrap">
            <YBLogo theme={theme} mode="full" size="sm" />
          </div>
        </div>

        {/* Right Column: Interactive Action Icons */}
        <div className="nav-actions-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {/* Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Catalog"
            className="nav-icon-btn"
          >
            <Search className="nav-icon-svg" size={22} strokeWidth={1.9} />
          </button>

          {/* Account */}
          <NavLink
            to="/account"
            aria-label="Client Account"
            className="nav-icon-btn nav-account-btn"
          >
            <User className="nav-icon-svg" size={22} strokeWidth={1.9} />
          </NavLink>

          {/* Wishlist */}
          <NavLink
            to="/wishlist"
            aria-label={`Wishlist (${wishlistCount} items)`}
            className="nav-icon-btn nav-wishlist-btn"
          >
            <Heart className="nav-icon-svg" size={22} strokeWidth={1.9} />
            {wishlistCount > 0 && (
              <span className="nav-icon-badge">
                {wishlistCount}
              </span>
            )}
          </NavLink>

          {/* Shopping Bag */}
          <button
            onClick={openCart}
            aria-label={`Shopping Bag (${totalItemsCount} items)`}
            className="nav-icon-btn nav-cart-btn"
            data-cursor="BAG"
          >
            <ShoppingBag className="nav-icon-svg" size={22} strokeWidth={1.9} />
            {totalItemsCount > 0 && (
              <span className="nav-icon-badge gold">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <style>{`
        /* Icon Buttons: Accessible tap targets and clear contrast */
        .nav-icon-btn {
          position: relative;
          display: inline-flex;
          alignItems: center;
          justifyContent: center;
          width: 44px;
          height: 44px;
          color: inherit;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 50%;
          transition: background-color 0.2s ease, transform 0.2s ease, color 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .nav-icon-btn:hover {
          background-color: rgba(184, 155, 94, 0.12);
        }

        .nav-icon-btn:active {
          transform: scale(0.92);
        }

        /* SVG Drop Shadow for pristine visibility over any photography */
        .navbar-transparent .nav-icon-svg,
        .navbar-transparent .mobile-nav-toggle svg,
        .navbar-transparent .yb-brand-logo {
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.65));
        }

        .nav-icon-badge {
          position: absolute;
          top: 4px;
          right: 4px;
          min-width: 18px;
          height: 18px;
          padding: 0 4px;
          border-radius: 10px;
          background-color: var(--color-gold);
          color: var(--color-obsidian);
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          border: 1.5px solid var(--color-obsidian);
          pointer-events: none;
        }

        .navbar-scrolled .nav-icon-badge {
          border-color: var(--color-warm-white);
        }

        .nav-icon-badge.gold {
          background-color: var(--color-gold);
          color: var(--color-obsidian);
        }

        .desktop-nav-links .nav-link {
          font-family: var(--font-sans);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .desktop-nav-links .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: var(--color-gold);
          transition: width 0.3s ease;
        }

        .desktop-nav-links .nav-link:hover::after,
        .desktop-nav-links .nav-link.active::after {
          width: 100%;
        }

        .mobile-nav-toggle {
          display: none;
        }

        .mobile-logo-wrap {
          display: none;
        }

        /* Desktop spacing */
        .nav-actions-wrap {
          gap: 0.5rem;
        }

        /* Mobile Breakpoint (< 960px) */
        @media (max-width: 960px) {
          .luxury-navbar {
            height: var(--header-height-mobile) !important;
          }
          .navbar-inner {
            grid-template-columns: 1fr auto 1fr !important;
            gap: 0.25rem !important;
          }
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-logo-wrap {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: inline-flex !important;
            justify-content: flex-start;
          }
          .mobile-logo-wrap {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          .nav-icon-btn {
            width: 44px;
            height: 44px;
          }
          .nav-icon-btn svg {
            width: 23px !important;
            height: 23px !important;
            stroke-width: 2.1 !important;
          }
          .nav-actions-wrap {
            gap: 0.15rem !important;
          }
        }

        /* Mobile Tablet (< 768px): Hide account button to preserve spacing */
        @media (max-width: 768px) {
          .nav-account-btn {
            display: none !important;
          }
        }

        /* Compact Mobile Screens (< 540px) */
        @media (max-width: 540px) {
          .mobile-logo-wrap .yb-brand-logo > div > div {
            display: none !important;
          }
          .mobile-logo-wrap .yb-brand-logo span {
            font-size: 0.8rem !important;
            letter-spacing: 0.16em !important;
          }
        }

        /* Ultra Compact (< 360px) */
        @media (max-width: 360px) {
          .nav-icon-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
