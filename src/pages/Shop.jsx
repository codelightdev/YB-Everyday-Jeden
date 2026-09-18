import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { Filter, SlidersHorizontal, ArrowUpDown, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES, formatCurrency } from '../data/products';
import ProductGrid from '../components/shop/ProductGrid';
import SeoMeta from '../components/common/SeoMeta';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryParam } = useParams();
  const navigate = useNavigate();

  // Category selection
  const currentCategory = useMemo(() => {
    if (categoryParam) {
      if (categoryParam === 'jewelry') return 'Jewelry';
      if (categoryParam === 'eyewear') return 'Sunglasses';
      if (categoryParam === 'optical') return 'Optical';
      if (categoryParam === 'accessories') return 'Accessories';
    }
    return searchParams.get('category') || 'All';
  }, [categoryParam, searchParams]);

  // Filter and sort states
  const [sortOption, setSortOption] = useState(searchParams.get('sort') || 'featured');
  const [filterNewOnly, setFilterNewOnly] = useState(searchParams.get('new') === 'true');
  const [filterBestseller, setFilterBestseller] = useState(searchParams.get('bestseller') === 'true');
  const [maxPrice, setMaxPrice] = useState(300000);

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category match
      if (currentCategory !== 'All' && p.category !== currentCategory) {
        return false;
      }
      // New arrivals filter
      if (filterNewOnly && !p.newArrival) {
        return false;
      }
      // Best sellers filter
      if (filterBestseller && !p.bestseller) {
        return false;
      }
      // Price limit
      if (p.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [currentCategory, filterNewOnly, filterBestseller, maxPrice, sortOption]);

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      navigate('/shop');
    } else if (catId === 'Jewelry') {
      navigate('/shop/jewelry');
    } else if (catId === 'Sunglasses') {
      navigate('/shop/eyewear');
    } else if (catId === 'Optical') {
      navigate('/shop/optical');
    } else if (catId === 'Accessories') {
      navigate('/shop/accessories');
    } else {
      setSearchParams({ category: catId });
    }
  };

  return (
    <>
      <SeoMeta
        title={`Shop ${currentCategory !== 'All' ? currentCategory : 'All Objects'} | YB EVERYDAY / JEDEN`}
        description="Browse the complete contemporary luxury catalog of fine jewelry, bespoke sunglasses, beta-titanium frames, and everyday essentials."
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 2.5rem)', paddingBottom: '6rem' }}>
        <div className="container-luxury">
          {/* Shop Editorial Header */}
          <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              The Catalog
            </span>
            <h1 className="editorial-title-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Shop YB
            </h1>
            <p className="editorial-subheading" style={{ maxWidth: '600px', margin: '0.75rem auto 0' }}>
              Objects of expression, architectural proportions, and restrained luxury designed for daily wear.
            </p>
          </div>

          {/* Filter and Sort Toolbar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              paddingBottom: '1.5rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              <button
                onClick={() => handleCategoryChange('all')}
                style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: currentCategory === 'All' ? 600 : 400,
                  backgroundColor: currentCategory === 'All' ? 'var(--color-obsidian)' : 'transparent',
                  color: currentCategory === 'All' ? 'var(--color-warm-white)' : 'var(--color-obsidian)',
                  border: currentCategory === 'All' ? '1px solid var(--color-obsidian)' : '1px solid var(--border-medium)',
                  transition: 'all 0.2s ease'
                }}
              >
                All ({PRODUCTS.length})
              </button>

              {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: currentCategory === cat.id ? 600 : 400,
                    backgroundColor: currentCategory === cat.id ? 'var(--color-obsidian)' : 'transparent',
                    color: currentCategory === cat.id ? 'var(--color-warm-white)' : 'var(--color-obsidian)',
                    border: currentCategory === cat.id ? '1px solid var(--color-obsidian)' : '1px solid var(--border-medium)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}

              <button
                onClick={() => setFilterNewOnly(prev => !prev)}
                style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: filterNewOnly ? 600 : 400,
                  backgroundColor: filterNewOnly ? 'rgba(184, 155, 94, 0.15)' : 'transparent',
                  color: filterNewOnly ? 'var(--color-gold-dark)' : 'var(--color-obsidian)',
                  border: filterNewOnly ? '1px solid var(--color-gold)' : '1px solid var(--border-medium)',
                  transition: 'all 0.2s ease'
                }}
              >
                New Arrivals
              </button>

              <button
                onClick={() => setFilterBestseller(prev => !prev)}
                style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: filterBestseller ? 600 : 400,
                  backgroundColor: filterBestseller ? 'rgba(184, 155, 94, 0.15)' : 'transparent',
                  color: filterBestseller ? 'var(--color-gold-dark)' : 'var(--color-obsidian)',
                  border: filterBestseller ? '1px solid var(--color-gold)' : '1px solid var(--border-medium)',
                  transition: 'all 0.2s ease'
                }}
              >
                Signatures
              </button>
            </div>

            {/* Sorting Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                Sort:
              </span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-medium)',
                  padding: '0.45rem 1rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-obsidian)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured Collection</option>
                <option value="newest">Newest Releases</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Count Banner */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            <span>Showing {filteredProducts.length} curated objects</span>
            {(filterNewOnly || filterBestseller || currentCategory !== 'All') && (
              <button
                onClick={() => {
                  setFilterNewOnly(false);
                  setFilterBestseller(false);
                  handleCategoryChange('all');
                }}
                style={{
                  color: 'var(--color-gold-dark)',
                  textDecoration: 'underline',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontSize: '0.72rem'
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} columns={4} />
        </div>
      </div>
    </>
  );
};

export default Shop;
