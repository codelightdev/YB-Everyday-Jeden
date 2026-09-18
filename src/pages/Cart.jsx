import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../data/products';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    total,
    shippingFee,
    isFreeShipping,
    freeShippingRemaining,
    freeShippingProgress,
    totalItemsCount
  } = useCart();

  const { user, addOrder } = useAuth();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const discountAmount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = Math.max(0, total - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'RADIANCE10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid code. Try "RADIANCE10" for 10% private client privilege.');
    }
  };

  const handleSimulateCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      const orderId = `YB-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        status: 'Processing in Atelier',
        trackingNumber: `DHL-${Math.floor(1000000 + Math.random() * 9000000)}-NG`,
        carrier: 'DHL Express Luxury Courier',
        deliveryDate: 'Expected in 2–3 business days',
        shippingAddress: user?.addresses?.[0] || {
          fullName: user?.name || 'Private Client',
          street: '14 Alexander Avenue, Old Ikoyi',
          city: 'Lagos',
          country: 'Nigeria'
        },
        items: cart.map(item => ({
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          selectedColor: item.selectedColor,
          selectedSize: item.selectedSize,
          image: item.product.images[0]
        })),
        total: finalTotal
      };

      addOrder(newOrder);
      clearCart();
      setCheckingOut(false);
      setOrderSuccess(newOrder);
    }, 1200);
  };

  if (orderSuccess) {
    return (
      <>
        <SeoMeta title="Order Confirmed | YB EVERYDAY / JEDEN" noindex={true} />
        <div style={{ paddingTop: 'calc(var(--header-height) + 4rem)', paddingBottom: '8rem' }}>
          <div className="container-luxury" style={{ maxWidth: '640px', textAlign: 'center' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(184, 155, 94, 0.15)',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}
            >
              <Check size={36} strokeWidth={2.5} />
            </div>

            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
              Acquisition Confirmed
            </span>

            <h1 className="editorial-title-lg" style={{ margin: '0.75rem 0 1rem', textTransform: 'uppercase' }}>
              Thank You for Your Patronage
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Your order <strong>#{orderSuccess.id}</strong> has been registered with the YB atelier. Our master craftsmen are preparing your pieces with complimentary signature packaging and insured courier transit.
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-soft-ivory)',
                border: '1px solid var(--border-subtle)',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2.5rem',
                fontSize: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Tracking Courier:</span>
                <strong>{orderSuccess.carrier}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Tracking Number:</span>
                <code>{orderSuccess.trackingNumber}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Total Paid:</span>
                <strong>{formatCurrency(orderSuccess.total)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Destination:</span>
                <span>{orderSuccess.shippingAddress.city}, {orderSuccess.shippingAddress.country}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/account" variant="primary">
                View in Client Account
              </Button>
              <Button to="/shop" variant="outline">
                Continue Exploring
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SeoMeta
        title={`Shopping Bag (${totalItemsCount}) | YB EVERYDAY / JEDEN`}
        description="Review your selected fine jewelry, L'Optique frames, and Jeden objects of radiance."
        noindex={true}
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '7rem' }}>
        <div className="container-luxury">
          {/* Header */}
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              Review Selection
            </span>
            <h1 className="editorial-title-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Your Shopping Bag
            </h1>
          </div>

          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 1rem' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-soft-ivory)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}
              >
                <ShoppingBag size={32} />
              </div>
              <h2 className="editorial-title-md" style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>
                Your shopping bag is presently empty
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 2rem', fontSize: '0.9rem' }}>
                Explore our fine jewelry, sculpted sunglasses, and everyday objects of expression.
              </p>
              <Button to="/shop" variant="primary" size="lg">
                Discover The Collections
              </Button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(3rem, 5vw, 5rem)',
                alignItems: 'flex-start'
              }}
            >
              {/* Left Column: Items Table */}
              <div style={{ flex: 1 }}>
                {/* Free Shipping Progress Indicator */}
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    backgroundColor: 'var(--color-soft-ivory)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '2rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                    <span>
                      {isFreeShipping ? (
                        <strong style={{ color: 'var(--color-gold)' }}>
                          Complimentary Insured Courier Active
                        </strong>
                      ) : (
                        <span>
                          Add <strong>{formatCurrency(freeShippingRemaining)}</strong> more for Complimentary Courier
                        </span>
                      )}
                    </span>
                    <span style={{ fontWeight: 600 }}>{freeShippingProgress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(0, 0, 0, 0.08)' }}>
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

                {/* Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cart.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 1fr auto',
                        gap: '1.5rem',
                        alignItems: 'center',
                        paddingBottom: '1.5rem',
                        borderBottom: '1px solid var(--border-subtle)'
                      }}
                    >
                      <Link to={`/product/${item.product.id}`}>
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          style={{
                            width: '100px',
                            height: '120px',
                            objectFit: 'cover',
                            backgroundColor: 'var(--color-charcoal)'
                          }}
                        />
                      </Link>

                      <div>
                        <span className="eyebrow" style={{ fontSize: '0.65rem' }}>
                          {item.product.category}
                        </span>
                        <h3 style={{ margin: '0.2rem 0' }}>
                          <Link
                            to={`/product/${item.product.id}`}
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '1.3rem',
                              color: 'var(--color-obsidian)',
                              fontWeight: 500
                            }}
                          >
                            {item.product.name}
                          </Link>
                        </h3>

                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                          <span>Finish: {item.selectedColor}</span>
                          {item.selectedSize && item.selectedSize !== 'Standard' && (
                            <span> · Size: {item.selectedSize}</span>
                          )}
                        </div>

                        {/* Quantity Stepper */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-medium)', height: '32px' }}>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                              aria-label="Decrease quantity"
                              style={{ width: '32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Minus size={12} />
                            </button>
                            <span style={{ minWidth: '32px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 500 }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                              aria-label="Increase quantity"
                              style={{ width: '32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                            style={{ color: 'var(--color-stone)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right', fontWeight: 500, fontSize: '1.1rem' }}>
                        {formatCurrency(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                  <Link
                    to="/shop"
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-obsidian)',
                      fontWeight: 600,
                      textDecoration: 'underline'
                    }}
                  >
                    ← Continue Shopping
                  </Link>
                  <button
                    onClick={clearCart}
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-stone)'
                    }}
                  >
                    Clear All Items
                  </button>
                </div>
              </div>

              {/* Right Column: Order Summary Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.75rem'
                  }}
                >
                  Order Summary
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Bag Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Courier Dispatch</span>
                    <span style={{ color: isFreeShipping ? 'var(--color-gold-dark)' : 'inherit', fontWeight: 500 }}>
                      {isFreeShipping ? 'Complimentary' : formatCurrency(shippingFee)}
                    </span>
                  </div>

                  {discountApplied && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-gold)' }}>
                      <span>Privilege Code (10%)</span>
                      <span>-{formatCurrency(discountAmount)}</span>
                    </div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '1rem',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 600
                    }}
                  >
                    <span>Total Amount</span>
                    <span>{formatCurrency(finalTotal)}</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Privilege Code (e.g. RADIANCE10)"
                    disabled={discountApplied}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.78rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      outline: 'none',
                      backgroundColor: discountApplied ? 'var(--color-soft-ivory)' : 'transparent'
                    }}
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    disabled={discountApplied}
                  >
                    {discountApplied ? 'Applied' : 'Apply'}
                  </Button>
                </form>

                {/* Checkout CTA */}
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={handleSimulateCheckout}
                  disabled={checkingOut}
                  icon={ArrowRight}
                >
                  {checkingOut ? 'Securing Acquisition...' : 'Complete Acquisition'}
                </Button>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    marginTop: '1.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Truck size={14} color="var(--color-gold)" />
                    <span>Express dispatch across Nigeria & worldwide</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={14} color="var(--color-gold)" />
                    <span>Fully insured transit with verified courier handoff</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
