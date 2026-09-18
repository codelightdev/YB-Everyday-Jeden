import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';
import SeoMeta from '../components/common/SeoMeta';

export const Journal = () => {
  const [featuredArticle, ...otherArticles] = JOURNAL_ARTICLES;

  return (
    <>
      <SeoMeta
        title="The Journal | YB EVERYDAY / JEDEN"
        description="Essays on contemporary luxury, jewelry styling, eyewear architecture, and the philosophy of everyday radiance."
      />

      <div style={{ paddingTop: 'calc(var(--header-height) + 2.5rem)', paddingBottom: '7rem' }}>
        <div className="container-luxury">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>
              The YB Journal
            </span>
            <h1 className="editorial-title-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Essays, Form & Perspective
            </h1>
            <p className="editorial-subheading" style={{ maxWidth: '600px', margin: '0.75rem auto 0' }}>
              Conversations on material integrity, styling principles, and the everyday culture of adornment.
            </p>
          </div>

          {/* Lead Featured Article */}
          {featuredArticle && (
            <article
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'center',
                marginBottom: '5rem',
                paddingBottom: '4rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <Link
                to={`/journal/${featuredArticle.slug}`}
                className="image-reveal-wrap"
                style={{
                  aspectRatio: '16 / 10',
                  backgroundColor: 'var(--color-charcoal)'
                }}
                data-cursor="READ"
              >
                <img
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Link>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Lead Editorial</span>
                  <span style={{ color: 'var(--color-stone)' }}>·</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{featuredArticle.readTime}</span>
                </div>

                <h2 style={{ margin: 0 }}>
                  <Link
                    to={`/journal/${featuredArticle.slug}`}
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
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                  {featuredArticle.excerpt}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--color-obsidian)', fontWeight: 500, marginBottom: '1.5rem' }}>
                  <span>By {featuredArticle.author}</span>
                  <span style={{ color: 'var(--color-stone)' }}>·</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{featuredArticle.date}</span>
                </div>

                <Link
                  to={`/journal/${featuredArticle.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    borderBottom: '2px solid var(--color-gold)',
                    paddingBottom: '0.25rem'
                  }}
                >
                  <span>Read Full Essay</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          )}

          {/* Grid of Remaining Articles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {otherArticles.map((article) => (
              <article
                key={article.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
                data-cursor="READ"
              >
                <Link
                  to={`/journal/${article.slug}`}
                  className="image-reveal-wrap"
                  style={{
                    aspectRatio: '16 / 11',
                    backgroundColor: 'var(--color-charcoal)'
                  }}
                >
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{article.category}</span>
                  <span style={{ color: 'var(--color-stone)' }}>·</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{article.readTime}</span>
                </div>

                <h3 style={{ margin: 0 }}>
                  <Link
                    to={`/journal/${article.slug}`}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      color: 'var(--color-obsidian)'
                    }}
                  >
                    {article.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {article.excerpt}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span>{article.date}</span>
                  <Link
                    to={`/journal/${article.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--color-obsidian)',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontSize: '0.7rem'
                    }}
                  >
                    <span>Read</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
