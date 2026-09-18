import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../data/products';
import { Button } from '../common/Button';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    total,
    shippingFee,
    isFreeShipping,
    freeShippingRemaining,
    freeShippingProgress,
    totalItemsCount
  } = useCart();

  const drawerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 'var(--z-drawer)',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(10, 10, 10, 0.65)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCart();
      }}
    >
      <div
        ref={drawerRef}
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: 'var(--color-warm-white)',
          color: 'var(--color-obsidian)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.25)',
          animation: 'slideLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={18} />
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              Shopping Bag ({totalItemsCount})
            </h3>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            style={{
              padding: '0.4rem',
              color: 'var(--color-obsidian)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div
          style={{
            padding: '0.85rem 1.75rem',
            backgroundColor: 'var(--color-soft-ivory)',
            borderBottom: '1px solid var(--border-subtle)',
            fontSize: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span>
              {isFreeShipping ? (
                <strong style={{ color: 'var(--color-gold)' }}>
                  Complimentary Luxury Courier Unlocked
                </strong>
              ) : (
                <span>
                  Add <strong>{formatCurrency(freeShippingRemaining)}</strong> for Complimentary Courier
                </span>
              )}
            </span>
            <span style={{ fontWeight: 600 }}>{freeShippingProgress}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '3px',
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${freeShippingProgress}%`,
                backgroundColor: 'var(--color-gold)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem 1.75rem'
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem 1rem'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-soft-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: 'var(--color-gold)'
                }}
              >
                <ShoppingBag size={28} />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  marginBottom: '0.5rem',
                  fontStyle: 'italic'
                }}
              >
                Your bag is empty
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '280px' }}>
                Discover our signature jewelry, editorial eyewear, and everyday objects of expression.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  closeCart();
                  navigate('/shop');
                }}
              >
                Explore The Collection
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cart.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    style={{ flexShrink: 0 }}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      style={{
                        width: '85px',
                        height: '100px',
                        objectFit: 'cover',
                        backgroundColor: 'var(--color-charcoal)'
                      }}
                    />
                  </Link>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={closeCart}
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.05rem',
                          fontWeight: 500,
                          lineHeight: 1.25
                        }}
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                        aria-label="Remove item"
                        style={{ color: 'var(--color-stone)', padding: '0.2rem' }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: '0.35rem 0' }}>
                      <span>{item.selectedColor}</span>
                      {item.selectedSize && item.selectedSize !== 'Standard' && (
                        <span> · {item.selectedSize}</span>
                      )}
                    </div>

                    <div
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '0.5rem'
                      }}
                    >
                      {/* Quantity Stepper */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-medium)',
                          height: '28px'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          style={{
                            width: '28px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-obsidian)'
                          }}
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          style={{
                            minWidth: '28px',
                            textAlign: 'center',
                            fontSize: '0.78rem',
                            fontWeight: 500
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          aria-label="Increase quantity"
                          style={{
                            width: '28px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-obsidian)'
                          }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                        {formatCurrency(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer / Subtotal / Checkout */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '1.5rem 1.75rem',
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--color-warm-white)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
              <span style={{ fontWeight: 500 }}>{formatCurrency(subtotal)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Estimated Shipping</span>
              <span style={{ color: isFreeShipping ? 'var(--color-gold)' : 'inherit', fontWeight: 500 }}>
                {isFreeShipping ? 'Complimentary' : formatCurrency(shippingFee)}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600
              }}
            >
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  closeCart();
                  navigate('/cart');
                }}
                icon={ArrowRight}
              >
                Proceed to Checkout
              </Button>

              <button
                onClick={() => {
                  closeCart();
                  navigate('/cart');
                }}
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  padding: '0.4rem',
                  textDecoration: 'underline'
                }}
              >
                View Full Bag & Calculator
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                marginTop: '1.25rem',
                fontSize: '0.7rem',
                color: 'var(--color-stone)'
              }}
            >
              <ShieldCheck size={14} color="var(--color-gold)" />
              <span>Complimentary Packaging & Insured Delivery</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
