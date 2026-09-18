import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import SearchOverlay from '../components/layout/SearchOverlay';
import CartDrawer from '../components/layout/CartDrawer';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/common/CustomCursor';
import Preloader from '../components/common/Preloader';
import Toast from '../components/common/Toast';

export const MainLayout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileNavOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  return (
    <div className="yb-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor />
      <Preloader />
      <Toast />

      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileNav={() => setIsMobileNavOpen(prev => !prev)}
        isMobileNavOpen={isMobileNavOpen}
      />

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CartDrawer />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
