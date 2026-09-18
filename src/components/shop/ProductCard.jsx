import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';

export const ProductCard = ({ product, onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <article
      className="product-card"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.4s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Badges and Overlay Actions */}
      <div
        className="image-reveal-wrap"
        style={{
          aspectRatio: '4 / 5',
          position: 'relative',
          backgroundColor: 'var(--color-charcoal)',
          overflow: 'hidden'
        }}
        data-cursor="VIEW"
      >
        <Link
          to={`/product/${product.id}`}
          aria-label={`View ${product.name}`}
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <img
            src={isHovered ? secondaryImage : primaryImage}
            alt={product.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        </Link>

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          {product.newArrival && <span className="luxury-badge gold">New Arrival</span>}
          {product.bestseller && <span className="luxury-badge">Signature</span>}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={inWishlist ? `Remove ${product.name} from Wishlist` : `Save ${product.name} to Wishlist`}
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(250, 249, 246, 0.9)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: inWishlist ? 'var(--color-gold)' : 'var(--color-obsidian)',
            transition: 'all 0.25s ease',
            zIndex: 3
          }}
        >
          <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} strokeWidth={1.8} />
        </button>

        {/* Quick View Button Hover Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '0.75rem',
            display: 'flex',
            gap: '0.5rem',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            backgroundColor: 'rgba(10, 10, 10, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 3
          }}
        >
          <button
            onClick={() => onQuickView && onQuickView(product)}
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
              gap: '0.4rem',
              transition: 'background-color 0.2s'
            }}
          >
            <Eye size={13} />
            <span>Quick View</span>
          </button>
          <button
            onClick={() => addToCart(product, 1)}
            aria-label="Quick add to bag"
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

      {/* Product Metadata */}
      <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)'
            }}
          >
            {product.category}
          </span>
          {product.colors && product.colors.length > 1 && (
            <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
              {product.colors.length} finishes
            </span>
          )}
        </div>

        <h3 style={{ margin: 0 }}>
          <Link
            to={`/product/${product.id}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.18rem',
              fontWeight: 400,
              color: 'var(--color-obsidian)',
              lineHeight: 1.25,
              transition: 'color 0.2s'
            }}
          >
            {product.name}
          </Link>
        </h3>

        <div style={{ marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: 'var(--color-obsidian)'
            }}
          >
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
