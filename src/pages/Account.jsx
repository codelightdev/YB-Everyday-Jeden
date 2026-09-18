import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, MapPin, Heart, LogOut, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../data/products';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const Account = () => {
  const { user, isLoggedIn, orders, login, register, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'addresses', 'profile'

  // Auth form states
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      login(email, password);
    } else {
      register(name, email, password);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <SeoMeta title="Client Portal | YB EVERYDAY / JEDEN" noindex={true} />
        <div style={{ paddingTop: 'calc(var(--header-height) + 4rem)', paddingBottom: '8rem' }}>
          <div className="container-luxury" style={{ maxWidth: '520px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                Private Client Circle
              </span>
              <h1 className="editorial-title-md" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {authMode === 'login' ? 'Client Access' : 'Create Client Account'}
              </h1>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                Access bespoke order tracking, saved residence addresses, and private concierge privileges.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1px solid var(--border-subtle)',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Tab Toggle */}
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
                <button
                  onClick={() => setAuthMode('login')}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: authMode === 'login' ? 600 : 400,
                    borderBottom: authMode === 'login' ? '2px solid var(--color-obsidian)' : 'none',
                    color: authMode === 'login' ? 'var(--color-obsidian)' : 'var(--text-secondary)'
                  }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthMode('register')}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: authMode === 'register' ? 600 : 400,
                    borderBottom: authMode === 'register' ? '2px solid var(--color-obsidian)' : 'none',
                    color: authMode === 'register' ? 'var(--color-obsidian)' : 'var(--text-secondary)'
                  }}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {authMode === 'register' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alexander Oladipo"
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-medium)', outline: 'none', fontSize: '0.9rem' }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@domain.com"
                    style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-medium)', outline: 'none', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border-medium)', outline: 'none', fontSize: '0.9rem' }}
                  />
                </div>

                <Button type="submit" variant="primary" fullWidth size="lg" style={{ marginTop: '0.75rem' }}>
                  {authMode === 'login' ? 'Access Account' : 'Create Account'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SeoMeta title="Client Portal | YB EVERYDAY / JEDEN" noindex={true} />

      <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '8rem' }}>
        <div className="container-luxury">
          {/* Client Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingBottom: '2.5rem',
              marginBottom: '3rem',
              borderBottom: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                  {user.tier}
                </span>
                <span style={{ color: 'var(--color-stone)' }}>·</span>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Member since {user.memberSince}
                </span>
              </div>
              <h1 className="editorial-title-md" style={{ textTransform: 'uppercase' }}>
                Welcome, {user.name}
              </h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {user.email} · {user.phone}
              </p>
            </div>

            <button
              onClick={logout}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-obsidian)',
                border: '1px solid var(--border-medium)',
                padding: '0.6rem 1.25rem'
              }}
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Account Navigation Tabs */}
          <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '3rem' }}>
            <button
              onClick={() => setActiveTab('orders')}
              style={{
                paddingBottom: '0.85rem',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: activeTab === 'orders' ? 600 : 400,
                borderBottom: activeTab === 'orders' ? '2px solid var(--color-gold)' : 'none',
                color: activeTab === 'orders' ? 'var(--color-obsidian)' : 'var(--text-secondary)'
              }}
            >
              Acquisitions & Tracking ({orders.length})
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              style={{
                paddingBottom: '0.85rem',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: activeTab === 'addresses' ? 600 : 400,
                borderBottom: activeTab === 'addresses' ? '2px solid var(--color-gold)' : 'none',
                color: activeTab === 'addresses' ? 'var(--color-obsidian)' : 'var(--text-secondary)'
              }}
            >
              Residence Addresses ({user.addresses?.length || 0})
            </button>
            <Link
              to="/wishlist"
              style={{
                paddingBottom: '0.85rem',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Saved Vault</span>
              <Heart size={14} />
            </Link>
          </div>

          {/* Tab 1: Orders / Acquisitions */}
          {activeTab === 'orders' && (
            <div>
              {orders.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                    No acquisitions recorded yet.
                  </p>
                  <Button to="/shop" variant="primary">Explore The Catalog</Button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      style={{
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: 'var(--color-warm-white)',
                        padding: '1.75rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          flexWrap: 'wrap',
                          gap: '1rem',
                          borderBottom: '1px solid var(--border-subtle)',
                          paddingBottom: '1.25rem',
                          marginBottom: '1.5rem'
                        }}
                      >
                        <div>
                          <span className="eyebrow" style={{ fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                            Order #{order.id}
                          </span>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                            Placed on {order.date}
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '0.3rem 0.8rem',
                              backgroundColor: order.status === 'Delivered' ? 'rgba(184, 155, 94, 0.15)' : 'rgba(10, 10, 10, 0.08)',
                              color: order.status === 'Delivered' ? 'var(--color-gold-dark)' : 'var(--color-obsidian)',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase'
                            }}
                          >
                            {order.status}
                          </span>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '0.3rem' }}>
                            {formatCurrency(order.total)}
                          </div>
                        </div>
                      </div>

                      {/* Items Row */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                        {order.items.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: '56px', height: '64px', objectFit: 'cover', flexShrink: 0 }}
                              />
                            )}
                            <div style={{ flex: 1 }}>
                              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: 0 }}>
                                {item.name}
                              </h4>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                {item.selectedColor} · Qty: {item.quantity}
                              </div>
                            </div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                              {formatCurrency(item.price * item.quantity)}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tracking Details */}
                      <div
                        style={{
                          backgroundColor: 'var(--color-soft-ivory)',
                          padding: '1rem 1.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem',
                          fontSize: '0.8rem'
                        }}
                      >
                        <div>
                          <span style={{ color: 'var(--text-secondary)' }}>Courier: </span>
                          <strong>{order.carrier}</strong>
                          <span style={{ margin: '0 0.5rem', color: 'var(--color-stone)' }}>·</span>
                          <span style={{ color: 'var(--text-secondary)' }}>Tracking: </span>
                          <code>{order.trackingNumber}</code>
                        </div>

                        <div>
                          <span>Delivery to: <strong>{order.shippingAddress?.city}, {order.shippingAddress?.country}</strong></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Saved Addresses */}
          {activeTab === 'addresses' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {user.addresses?.map((addr) => (
                <div
                  key={addr.id}
                  style={{
                    border: '1px solid var(--border-subtle)',
                    padding: '2rem',
                    backgroundColor: 'var(--color-warm-white)',
                    position: 'relative'
                  }}
                >
                  {addr.isDefault && (
                    <span className="luxury-badge gold" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                      Primary
                    </span>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <MapPin size={16} color="var(--color-gold)" />
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>
                      {addr.label}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--color-obsidian)', marginBottom: '1.5rem' }}>
                    <strong>{addr.fullName}</strong>
                    <br />
                    {addr.street}
                    <br />
                    {addr.city}, {addr.country}
                    <br />
                    {addr.phone}
                  </p>

                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                    Verified Delivery Endpoint
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
