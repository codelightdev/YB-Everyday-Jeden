import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, ShoppingBag, Sparkles, Compass } from 'lucide-react';
import { formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';
import QuickViewModal from './QuickViewModal';

export const OptiqueSwiper = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(340);
  const { addToCart } = useCart();

  const maxIndex = Math.max(0, products.length - 1);

  useEffect(() => {
    const computeCardWidth = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      let visibleCards = 3;
      if (width < 640) {
        visibleCards = 1.15;
      } else if (width < 1024) {
        visibleCards = 2.15;
      }
      const gap = 24;
      const calculated = (width - (Math.floor(visibleCards) - 1) * gap) / visibleCards;
      setCardWidth(Math.floor(calculated));
    };

    computeCardWidth();
    window.addEventListener('resize', computeCardWidth);
    return () => window.removeEventListener('resize', computeCardWidth);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch and mouse drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    if (Math.abs(diff) > 5) {
      setHasMoved(true);
    }
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -40) {
      nextSlide();
    } else if (dragOffset > 40) {
      prevSlide();
    }
    setDragOffset(0);
  };

  if (!products || products.length === 0) return null;

  const currentProduct = products[currentIndex];
  const progressPercent = ((currentIndex + 1) / products.length) * 100;

  return (
    <div className="optique-swiper-container" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Top Controls Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        {/* Slide Counter & Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500, letterSpacing: '0.08em' }}>
            <span style={{ color: 'var(--color-gold)' }}>0{currentIndex + 1}</span>
            <span style={{ color: 'var(--color-stone)', margin: '0 0.35rem' }}>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>0{products.length}</span>
          </div>

          <div
            style={{
              width: '120px',
              height: '2px',
              backgroundColor: 'rgba(10, 10, 10, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                backgroundColor: 'var(--color-gold)',
                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)'
            }}
          >
            {currentProduct?.subcategory || 'Atelier Frame'}
          </span>
        </div>

        {/* Previous / Next Arrow Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={prevSlide}
            aria-label="Previous Optique Frame"
            className="swiper-nav-btn"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'var(--color-warm-white)',
              color: 'var(--color-obsidian)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Optique Frame"
            className="swiper-nav-btn"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'var(--color-warm-white)',
              color: 'var(--color-obsidian)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Interactive Showcase Carousel Track */}
      <div
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          overflow: 'hidden',
          padding: '0.5rem 0 1.5rem'
        }}
      >
        <div
          className="optique-cards-wrapper"
          style={{
            display: 'flex',
            gap: '24px',
            transform: `translateX(calc(-${currentIndex * (cardWidth + 24)}px + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform'
          }}
        >
          {products.map((product, index) => {
            const isHighlighted = index === currentIndex;

            return (
              <div
                key={product.id}
                className="optique-card radiance-shimmer-sweep"
                style={{
                  flex: `0 0 ${cardWidth}px`,
                  width: `${cardWidth}px`,
                  boxSizing: 'border-box',
                  position: 'relative',
                  backgroundColor: 'var(--color-warm-white)',
                  border: isHighlighted ? '1px solid var(--color-gold)' : '1px solid var(--border-subtle)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isHighlighted ? '0 12px 36px rgba(184, 155, 94, 0.12)' : 'none',
                  transform: isHighlighted ? 'translateY(-4px)' : 'none'
                }}
              >
                {/* Image Wrap */}
                <div
                  className="image-reveal-wrap"
                  style={{
                    aspectRatio: '4 / 3.4',
                    backgroundColor: 'var(--color-charcoal)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '1.25rem'
                  }}
                  data-cursor="OPTIQUE"
                >
                  <Link to={`/product/${product.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </Link>

                  {/* Frame Spec Overlay Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      display: 'flex',
                      gap: '0.4rem',
                      zIndex: 2
                    }}
                  >
                    <span className="luxury-badge gold" style={{ fontSize: '0.62rem' }}>
                      {product.subcategory}
                    </span>
                  </div>

                  {/* Quick Action Overlay */}
                  <div
                    className="optique-card-overlay"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      padding: '0.75rem',
                      display: 'flex',
                      gap: '0.5rem',
                      backgroundColor: 'rgba(10, 10, 10, 0.8)',
                      backdropFilter: 'blur(8px)',
                      zIndex: 3
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      style={{
                        flex: 1,
                        backgroundColor: 'var(--color-warm-white)',
                        color: 'var(--color-obsidian)',
                        padding: '0.55rem',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Eye size={13} />
                      <span>Specifications</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      aria-label="Add frame to bag"
                      style={{
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-obsidian)',
                        padding: '0.55rem 0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>

                {/* Metadata */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <span className="eyebrow" style={{ fontSize: '0.65rem' }}>
                      {product.material.split('&')[0] || 'Acetate'}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      {product.dimensions}
                    </span>
                  </div>

                  <h3 style={{ margin: '0.2rem 0 0.5rem' }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        color: 'var(--color-obsidian)',
                        lineHeight: 1.2
                      }}
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>
                      {formatCurrency(product.price)}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: 'var(--color-gold-dark)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <span>Examine</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <style>{`
        .swiper-nav-btn:hover {
          background-color: var(--color-gold) !important;
          color: var(--color-obsidian) !important;
          border-color: var(--color-gold) !important;
        }
        .optique-card .optique-card-overlay {
          opacity: 0;
          transform: translateY(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
        }
        .optique-card:hover .optique-card-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .optique-card .optique-card-overlay {
            opacity: 1 !important;
            transform: translateY(0) !important;
            position: static !important;
            margin-top: 0.75rem !important;
            background: transparent !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OptiqueSwiper;
