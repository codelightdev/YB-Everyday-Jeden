import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Button } from '../common/Button';

export const QuickViewModal = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    if (product) {
      setSelectedImage(0);
      setSelectedColor(product.colors?.[0]?.name || 'Standard');
      setSelectedSize(product.sizes?.[0] || 'Standard');
      setQuantity(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(10, 10, 10, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick View ${product.name}`}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          backgroundColor: 'var(--color-warm-white)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-warm-white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-obsidian)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <X size={18} />
        </button>

        {/* Gallery Column */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ aspectRatio: '4/5', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-charcoal)' }}>
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  style={{
                    width: '60px',
                    height: '60px',
                    border: selectedImage === i ? '2px solid var(--color-gold)' : '1px solid var(--border-subtle)',
                    overflow: 'hidden'
                  }}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
            {product.category} · {product.subcategory}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              fontWeight: 400,
              marginBottom: '0.5rem',
              color: 'var(--color-obsidian)'
            }}
          >
            {product.name}
          </h3>

          <div
            style={{
              fontSize: '1.25rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              marginBottom: '1.25rem'
            }}
          >
            {formatCurrency(product.price)}
          </div>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}
          >
            {product.description}
          </p>

          {/* Color/Finish Selection */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Finish: <strong>{selectedColor}</strong>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c.name)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: selectedColor === c.name ? '2px solid var(--color-obsidian)' : '1px solid var(--border-medium)',
                      boxShadow: selectedColor === c.name ? '0 0 0 2px var(--color-gold)' : 'none',
                      position: 'relative'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'One Size' && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Size: <strong>{selectedSize}</strong>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {product.sizes.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.75rem',
                      border: selectedSize === s ? '1px solid var(--color-obsidian)' : '1px solid var(--border-subtle)',
                      backgroundColor: selectedSize === s ? 'var(--color-obsidian)' : 'transparent',
                      color: selectedSize === s ? 'var(--color-warm-white)' : 'var(--color-obsidian)'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Bag and Wishlist */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
            <Button
              variant="primary"
              onClick={handleAddToCart}
              icon={ShoppingBag}
              style={{ flex: 1 }}
            >
              Add to Bag
            </Button>
            <button
              onClick={() => toggleWishlist(product)}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
              style={{
                width: '50px',
                height: '50px',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: inWishlist ? 'var(--color-gold)' : 'var(--color-obsidian)'
              }}
            >
              <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
            </button>
          </div>

          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              fontWeight: 600
            }}
          >
            <span>View Full Specifications & Editorial</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
