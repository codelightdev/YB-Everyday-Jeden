import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/shop/ProductGrid';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const CollectionDetails = () => {
  const { slug } = useParams();

  const collection = useMemo(() => {
    return COLLECTIONS.find(c => c.slug === slug || c.id === slug);
  }, [slug]);

  const collectionProducts = useMemo(() => {
    if (!collection) return [];
    return PRODUCTS.filter(p => collection.productIds.includes(p.id) || p.collection === collection.id);
  }, [collection]);

  if (!collection) {
    return (
      <div className="container-luxury" style={{ paddingTop: '10rem', paddingBottom: '10rem', textAlign: 'center' }}>
        <h2 className="editorial-title-md" style={{ marginBottom: '1rem' }}>Collection Not Found</h2>
        <Button to="/collections" variant="primary">Return to Collections</Button>
      </div>
    );
  }

  return (
    <>
      <SeoMeta
        title={`${collection.title} — Campaign | YB EVERYDAY / JEDEN`}
        description={collection.concept}
        image={collection.heroImage}
        imageAlt={`${collection.title} Campaign - YB EVERYDAY / JEDEN`}
        canonical={`/collections/${collection.slug}`}
      />

      {/* Campaign Full-Bleed Hero */}
      <section
        style={{
          position: 'relative',
          height: '75vh',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-obsidian)',
          color: 'var(--color-warm-white)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)), url('${collection.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div
          className="container-luxury"
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '860px',
            paddingTop: '2rem'
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
              Campaign Series · {collection.year}
            </span>
          </div>

          <h1
            className="editorial-title-xl"
            style={{
              color: 'var(--color-warm-white)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem'
            }}
          >
            {collection.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              fontStyle: 'italic',
              color: 'rgba(250, 249, 246, 0.9)',
              maxWidth: '620px',
              margin: '0 auto'
            }}
          >
            “{collection.tagline}”
          </p>
        </div>
      </section>

      {/* Narrative Concept Statement */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-luxury">
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto 5rem',
              textAlign: 'center'
            }}
          >
            <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              The Curatorial Vision
            </span>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
                lineHeight: 1.5,
                color: 'var(--color-obsidian)',
                marginBottom: '1.5rem',
                fontWeight: 300
              }}
            >
              {collection.concept}
            </p>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }} />
          </div>

          {/* Collection Products Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
              <h2 className="editorial-title-md" style={{ textTransform: 'uppercase' }}>
                Featured Campaign Objects
              </h2>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                {collectionProducts.length} Pieces
              </span>
            </div>

            <ProductGrid products={collectionProducts} columns={4} />
          </div>

          {/* Navigation to other collections */}
          <div
            style={{
              marginTop: '6rem',
              paddingTop: '3rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Link
              to="/collections"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={14} />
              <span>All Collections</span>
            </Link>

            <Link
              to="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--color-gold-dark)'
              }}
            >
              <span>Explore Full Catalog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionDetails;
