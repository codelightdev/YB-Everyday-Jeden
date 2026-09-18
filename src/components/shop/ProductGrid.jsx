import React, { useState } from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';

export const ProductGrid = ({ products = [], columns = 4, emptyMessage = 'No objects found matching this criteria.' }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontStyle: 'italic', marginBottom: '1rem' }}>
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid-products">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        ))}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};

export default ProductGrid;
