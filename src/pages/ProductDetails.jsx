import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Plus, Minus, ChevronDown, Shield, Truck, Package, ArrowLeft } from 'lucide-react';
import { PRODUCTS, formatCurrency } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductGallery from '../components/shop/ProductGallery';
import ProductGrid from '../components/shop/ProductGrid';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id === id || p.slug === id);
  }, [id]);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('details');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0]?.name || 'Standard');
      setSelectedSize(product.sizes?.[0] || 'Standard');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container-luxury" style={{ paddingTop: '10rem', paddingBottom: '10rem', textAlign: 'center' }}>
        <h2 className="editorial-title-md" style={{ marginBottom: '1rem' }}>Object Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The requested luxury piece is unavailable or has been archived.</p>
        <Button to="/shop" variant="primary">Return to Catalog</Button>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(prev => (prev === section ? null : section));
  };

  return (
    <>
      <SeoMeta
        title={`${product.name} | YB EVERYDAY / JEDEN`}
        description={product.description}
        image={product.images[0]}
        imageAlt={`${product.name} - YB EVERYDAY / JEDEN`}
        type="product"
        product={product}
        canonical={`/product/${product.id}`}
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '6rem' }}>
        <div className="container-luxury">
          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem'
            }}
          >
            <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'inherit' }}>
              <ArrowLeft size={12} />
              <span>Catalog</span>
            </Link>
            <span>/</span>
            <Link to={`/shop?category=${encodeURIComponent(product.category)}`} style={{ color: 'inherit' }}>
              {product.category}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--color-obsidian)', fontWeight: 500 }}>{product.name}</span>
          </div>

          {/* Main Product Layout: Gallery & Details */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'flex-start',
              marginBottom: '6rem'
            }}
          >
            {/* Column 1: Multi-image Product Gallery */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Column 2: Order Information & Specifications */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.6rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                  {product.category} · {product.subcategory}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: 'var(--color-obsidian)',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                {product.name}
              </h1>

              <div
                style={{
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  color: 'var(--color-obsidian)',
                  marginBottom: '1.75rem'
                }}
              >
                {formatCurrency(product.price)}
              </div>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem'
                }}
              >
                {product.description}
              </p>

              {/* Color/Finish Selector */}
              {product.colors && product.colors.length > 0 && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span>Finish</span>
                    <strong>{selectedColor}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '0.85rem' }}>
                    {product.colors.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(c.name)}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          border: selectedColor === c.name ? '2px solid var(--color-obsidian)' : '1px solid var(--border-medium)',
                          boxShadow: selectedColor === c.name ? '0 0 0 2px var(--color-gold)' : 'none',
                          cursor: 'pointer'
                        }}
                        title={c.name}
                        aria-label={`Select ${c.name} finish`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'One Size' && (
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span>Select Size</span>
                    <span style={{ color: 'var(--color-gold-dark)', textDecoration: 'underline', cursor: 'pointer' }}>
                      Sizing Guide
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {product.sizes.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSize(s)}
                        style={{
                          padding: '0.65rem 1.1rem',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-sans)',
                          letterSpacing: '0.08em',
                          border: selectedSize === s ? '1px solid var(--color-obsidian)' : '1px solid var(--border-medium)',
                          backgroundColor: selectedSize === s ? 'var(--color-obsidian)' : 'transparent',
                          color: selectedSize === s ? 'var(--color-warm-white)' : 'var(--color-obsidian)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Add to Bag */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid var(--border-medium)',
                    height: '52px',
                    width: '120px'
                  }}
                >
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    aria-label="Decrease quantity"
                    style={{
                      flex: 1,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Minus size={14} />
                  </button>
                  <span style={{ width: '36px', textAlign: 'center', fontWeight: 500, fontSize: '0.9rem' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    aria-label="Increase quantity"
                    style={{
                      flex: 1,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  style={{ flex: 1, height: '52px' }}
                  icon={ShoppingBag}
                  cursorText="ADD"
                >
                  Add to Bag
                </Button>

                <button
                  onClick={() => toggleWishlist(product)}
                  aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
                  style={{
                    width: '52px',
                    height: '52px',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: inWishlist ? 'var(--color-gold)' : 'var(--color-obsidian)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Service Commitments Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid var(--border-subtle)',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '2rem',
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Truck size={15} color="var(--color-gold)" />
                  <span>Insured Express</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Package size={15} color="var(--color-gold)" />
                  <span>Atelier Packaging</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={15} color="var(--color-gold)" />
                  <span>Lifetime Integrity</span>
                </div>
              </div>

              {/* Accordion Sections */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Accordion 1: Craftsmanship & Materials */}
                <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => toggleAccordion('details')}
                    style={{
                      width: '100%',
                      padding: '1.15rem 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>Craftsmanship & Specifications</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'details' ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  {openAccordion === 'details' && (
                    <div style={{ paddingBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      <p style={{ marginBottom: '0.75rem' }}>{product.details}</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <li><strong>Material:</strong> {product.material}</li>
                        <li><strong>Dimensions:</strong> {product.dimensions}</li>
                        <li><strong>Weight:</strong> {product.weight}</li>
                        <li><strong>Origin:</strong> Handcrafted under the YB Atelier Quality Standard</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Delivery & Shipping */}
                <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => toggleAccordion('shipping')}
                    style={{
                      width: '100%',
                      padding: '1.15rem 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>Complimentary Delivery & Courier</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'shipping' ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  {openAccordion === 'shipping' && (
                    <div style={{ paddingBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      <p style={{ marginBottom: '0.5rem' }}>
                        All orders over ₦150,000 qualify for complimentary insured courier dispatch.
                      </p>
                      <p>
                        <strong>Lagos & Abuja:</strong> 24–48 hours direct courier delivery.
                        <br />
                        <strong>Nationwide Nigeria:</strong> 2–4 business days via DHL Express.
                        <br />
                        <strong>International:</strong> 3–5 business days with tracked customs clearance.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Packaging & Returns */}
                <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => toggleAccordion('returns')}
                    style={{
                      width: '100%',
                      padding: '1.15rem 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>Bespoke Packaging & Exchanges</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'returns' ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  {openAccordion === 'returns' && (
                    <div style={{ paddingBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      <p>
                        Every piece arrives encased in our signature matte obsidian box, accompanied by a microfiber travel folio and individualized certificate of authenticity. We offer complimentary 14-day exchanges on all unworn pieces in original packaging.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div style={{ paddingTop: '4rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <span className="eyebrow">Harmonizing Objects</span>
                <h2 className="editorial-title-lg" style={{ marginTop: '0.5rem', textTransform: 'uppercase' }}>
                  You May Also Like
                </h2>
              </div>
              <ProductGrid products={relatedProducts} columns={4} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
