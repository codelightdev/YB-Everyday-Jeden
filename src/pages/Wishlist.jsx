import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../data/products';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  return (
    <>
      <SeoMeta
        title={`Saved Wishlist (${wishlist.length}) | YB EVERYDAY / JEDEN`}
        description="Review your curated wishlist of YB fine jewelry, eyewear, and everyday objects."
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '7rem' }}>
        <div className="container-luxury">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                Curated Vault
              </span>
              <h1 className="editorial-title-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Saved Wishlist
              </h1>
            </div>

            {wishlist.length > 0 && (
              <button
                onClick={clearWishlist}
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-stone)',
                  textDecoration: 'underline'
                }}
              >
                Clear Entire Wishlist
              </button>
            )}
          </div>

          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 1rem' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-soft-ivory)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}
              >
                <Heart size={30} />
              </div>
              <h2 className="editorial-title-md" style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>
                Your wishlist is empty
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '380px', margin: '0 auto 2rem', fontSize: '0.9rem' }}>
                Curate your private selection of signature jewelry and bespoke frames as you explore our collections.
              </p>
              <Button to="/shop" variant="primary" size="lg">
                Explore The Catalog
              </Button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'clamp(1.5rem, 3vw, 2.5rem)'
              }}
            >
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--color-warm-white)',
                    padding: '1rem',
                    position: 'relative'
                  }}
                >
                  {/* Remove icon */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-obsidian)',
                      zIndex: 2
                    }}
                  >
                    <Trash2 size={14} />
                  </button>

                  <Link to={`/product/${product.id}`} style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--color-charcoal)' }}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Link>

                  <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span className="eyebrow" style={{ fontSize: '0.65rem' }}>
                      {product.category}
                    </span>
                    <h3 style={{ margin: '0.3rem 0' }}>
                      <Link
                        to={`/product/${product.id}`}
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.15rem',
                          color: 'var(--color-obsidian)'
                        }}
                      >
                        {product.name}
                      </Link>
                    </h3>

                    <div style={{ fontSize: '0.92rem', fontWeight: 500, marginBottom: '1.25rem' }}>
                      {formatCurrency(product.price)}
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        onClick={() => handleMoveToCart(product)}
                        icon={ShoppingBag}
                      >
                        Move to Bag
                      </Button>
                    </div>
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

export default Wishlist;
