import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS, formatCurrency } from '../../data/products';

export const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 150);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter products
  const cleanQuery = query.trim().toLowerCase();
  const results = cleanQuery
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.subcategory.toLowerCase().includes(cleanQuery) ||
        p.material.toLowerCase().includes(cleanQuery) ||
        p.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const handleProductSelect = (id) => {
    onClose();
    navigate(`/product/${id}`);
  };

  const handleCategorySelect = (category) => {
    onClose();
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(10, 10, 10, 0.96)',
        backdropFilter: 'blur(20px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        flexDirection: 'column',
        color: 'var(--color-warm-white)',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search Catalog"
    >
      {/* Header with Close */}
      <div
        className="container-luxury"
        style={{
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
          Atelier Search
        </span>
        <button
          onClick={onClose}
          aria-label="Close search"
          style={{
            color: 'var(--color-warm-white)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          <span>ESC</span>
          <X size={18} />
        </button>
      </div>

      {/* Search Input Box */}
      <div
        className="container-luxury"
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingTop: 'clamp(2rem, 5vw, 4rem)',
          paddingBottom: '3rem'
        }}
      >
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)'
              }}
            >
              What are you looking for?
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              paddingBottom: '0.75rem',
              marginBottom: '2.5rem'
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewelry, sunglasses, optical frames, materials..."
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'var(--color-warm-white)',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                outline: 'none',
                fontWeight: 300
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{ color: 'var(--color-stone)', padding: '0.5rem' }}
                aria-label="Clear input"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Quick Category Suggestions if query is empty */}
          {!query && (
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-inverse-muted)',
                  marginBottom: '1.25rem'
                }}
              >
                Popular Searches
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Signet Rings', 'Double Helix Chain', 'Titanium Optical', 'Japanese Acetate', 'Tennis Bracelet', 'Minimalist Watch'].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(item)}
                    style={{
                      padding: '0.5rem 1rem',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '0.8rem',
                      color: 'var(--color-warm-white)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results Display */}
          {cleanQuery && results.length > 0 && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.75rem'
                }}
              >
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                  {results.length} {results.length === 1 ? 'Object Found' : 'Objects Found'}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductSelect(product.id)}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease'
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ overflow: 'hidden' }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.65rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--color-gold)'
                        }}
                      >
                        {product.category}
                      </span>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.1rem',
                          fontWeight: 400,
                          margin: '0.2rem 0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {product.name}
                      </h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-stone)' }}>
                        {formatCurrency(product.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results Found */}
          {cleanQuery && results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}
              >
                No objects found for "{query}"
              </p>
              <p style={{ color: 'var(--text-inverse-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Try exploring our signature categories or contact our private concierge for bespoke commissions.
              </p>
              <button
                onClick={() => {
                  onClose();
                  navigate('/shop');
                }}
                style={{
                  padding: '0.8rem 2rem',
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-obsidian)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase'
                }}
              >
                Explore Full Catalog
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
