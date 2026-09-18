import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

export const ProductGallery = ({ images = [], productName = 'Product' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeImage = images[activeIndex] || images[0];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Main Image Viewer */}
      <div
        className="image-reveal-wrap"
        style={{
          aspectRatio: '4 / 5',
          backgroundColor: 'var(--color-charcoal)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'crosshair'
        }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        data-cursor="ZOOM"
      >
        <img
          src={activeImage}
          alt={`${productName} view ${activeIndex + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: isZoomed ? 'none' : 'transform 0.5s ease',
            transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            transform: isZoomed ? 'scale(1.8)' : 'scale(1)'
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(10, 10, 10, 0.6)',
            color: 'var(--color-warm-white)',
            padding: '0.4rem 0.75rem',
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            pointerEvents: 'none',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Maximize2 size={12} />
          <span>Hover to Zoom</span>
        </div>
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              style={{
                width: '76px',
                height: '92px',
                flexShrink: 0,
                border: activeIndex === idx ? '2px solid var(--color-gold)' : '1px solid var(--border-subtle)',
                overflow: 'hidden',
                padding: 0,
                backgroundColor: 'var(--color-charcoal)',
                transition: 'border-color 0.2s ease'
              }}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
