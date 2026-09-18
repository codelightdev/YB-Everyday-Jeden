import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '../data/collections';
import SeoMeta from '../components/common/SeoMeta';

export const Collections = () => {
  return (
    <>
      <SeoMeta
        title="Collections & Lookbooks | YB EVERYDAY / JEDEN"
        description="Explore the five editorial campaign series of YB EVERYDAY / JEDEN: Jeden, Radiance, After Dark, Essentials, and Atelier Optique."
        canonical="/collections"
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 2.5rem)', paddingBottom: '7rem' }}>
        <div className="container-luxury">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              Series & Lookbooks
            </span>
            <h1 className="editorial-title-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Collections
            </h1>
            <p className="editorial-subheading" style={{ maxWidth: '650px', margin: '0.75rem auto 0' }}>
              Each collection embodies a distinct dialogue between light, material architecture, and human expression.
            </p>
          </div>

          {/* Editorial Campaign Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 6rem)' }}>
            {COLLECTIONS.map((col, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <article
                  key={col.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(2rem, 5vw, 4.5rem)',
                    alignItems: 'center',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: 'clamp(3rem, 6vw, 5rem)'
                  }}
                >
                  {/* Image Column */}
                  <div
                    className="image-reveal-wrap"
                    style={{
                      aspectRatio: '16 / 10',
                      order: isEven ? 1 : 2,
                      backgroundColor: 'var(--color-charcoal)'
                    }}
                    data-cursor="LOOKBOOK"
                  >
                    <Link to={`/collections/${col.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                      <img
                        src={col.heroImage}
                        alt={col.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Link>
                  </div>

                  {/* Text Column */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                        {col.year}
                      </span>
                      <span style={{ color: 'var(--color-stone)' }}>·</span>
                      <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        {col.subtitle}
                      </span>
                    </div>

                    <h2 style={{ margin: 0 }}>
                      <Link
                        to={`/collections/${col.slug}`}
                        className="editorial-title-lg"
                        style={{
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                          color: 'var(--color-obsidian)',
                          lineHeight: 1.1,
                          display: 'inline-block',
                          marginBottom: '1rem'
                        }}
                      >
                        {col.title}
                      </Link>
                    </h2>

                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        fontStyle: 'italic',
                        color: 'var(--color-gold-dark)',
                        marginBottom: '1rem'
                      }}
                    >
                      “{col.tagline}”
                    </p>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '520px'
                      }}
                    >
                      {col.concept}
                    </p>

                    <div>
                      <Link
                        to={`/collections/${col.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--color-obsidian)',
                          borderBottom: '2px solid var(--color-gold)',
                          paddingBottom: '0.35rem',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        <span>Explore Campaign Pieces</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
