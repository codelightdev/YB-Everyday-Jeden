import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Context Providers
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

// Master Layout
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Collections from './pages/Collections';
import CollectionDetails from './pages/CollectionDetails';
import About from './pages/About';
import Journal from './pages/Journal';
import JournalArticle from './pages/JournalArticle';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  {/* Home */}
                  <Route index element={<Home />} />

                  {/* Shop & Subcategories */}
                  <Route path="shop" element={<Shop />} />
                  <Route path="shop/:categoryParam" element={<Shop />} />

                  {/* Product Details */}
                  <Route path="product/:id" element={<ProductDetails />} />

                  {/* Collections */}
                  <Route path="collections" element={<Collections />} />
                  <Route path="collections/:slug" element={<CollectionDetails />} />

                  {/* Editorial & Brand Pages */}
                  <Route path="about" element={<About />} />
                  <Route path="journal" element={<Journal />} />
                  <Route path="journal/:slug" element={<JournalArticle />} />
                  <Route path="contact" element={<Contact />} />

                  {/* E-Commerce Actions */}
                  <Route path="cart" element={<Cart />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="account" element={<Account />} />

                  {/* Fallback to Home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
