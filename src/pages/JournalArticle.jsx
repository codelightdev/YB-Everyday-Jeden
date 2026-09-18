import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const JournalArticle = () => {
  const { slug } = useParams();

  const article = useMemo(() => {
    return JOURNAL_ARTICLES.find(a => a.slug === slug);
  }, [slug]);

  const relatedArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter(a => a.slug !== slug).slice(0, 2);
  }, [slug]);

  if (!article) {
    return (
      <div className="container-luxury" style={{ paddingTop: '10rem', paddingBottom: '10rem', textAlign: 'center' }}>
        <h2 className="editorial-title-md" style={{ marginBottom: '1rem' }}>Article Not Found</h2>
        <Button to="/journal" variant="primary">Return to Journal</Button>
      </div>
    );
  }

  return (
    <>
      <SeoMeta
        title={`${article.title} | YB Journal`}
        description={article.excerpt}
        image={article.heroImage}
        imageAlt={`${article.title} - YB Journal`}
        type="article"
        article={article}
        canonical={`/journal/${article.slug}`}
      />

      <article style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '7rem' }}>
        <div className="container-luxury">
          {/* Back link */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link
              to="/journal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)'
              }}
            >
              <ArrowLeft size={13} />
              <span>Back to Journal</span>
            </Link>
          </div>

          {/* Article Header */}
          <header style={{ maxWidth: '860px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>
                {article.category}
              </span>
              <span style={{ color: 'var(--color-stone)' }}>·</span>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                {article.readTime}
              </span>
            </div>

            <h1
              className="editorial-title-lg"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1.05,
                marginBottom: '1.25rem'
              }}
            >
              {article.title}
            </h1>

            {article.subtitle && (
              <p
                className="editorial-subheading"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  lineHeight: 1.5,
                  marginBottom: '2rem'
                }}
              >
                {article.subtitle}
              </p>
            )}

            {/* Author bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '0.85rem 0'
              }}
            >
              <div>
                Written by <strong>{article.author}</strong> ({article.authorRole})
              </div>
              <span>·</span>
              <div>{article.date}</div>
            </div>
          </header>

          {/* Hero Photography */}
          <div
            className="image-reveal-wrap"
            style={{
              maxWidth: '1100px',
              margin: '0 auto 4.5rem',
              aspectRatio: '16 / 9',
              backgroundColor: 'var(--color-charcoal)'
            }}
          >
            <img
              src={article.heroImage}
              alt={article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Body Content */}
          <div
            style={{
              maxWidth: '740px',
              margin: '0 auto 5rem',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              color: 'var(--color-obsidian)'
            }}
          >
            {article.content.map((block, idx) => {
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      fontStyle: 'italic',
                      lineHeight: 1.35,
                      color: 'var(--color-obsidian)',
                      borderLeft: '2px solid var(--color-gold)',
                      paddingLeft: '2rem',
                      margin: '3rem 0'
                    }}
                  >
                    “{block.text}”
                  </blockquote>
                );
              }

              if (block.type === 'image') {
                return (
                  <figure key={idx} style={{ margin: '3.5rem 0' }}>
                    <div style={{ overflow: 'hidden', backgroundColor: 'var(--color-charcoal)' }}>
                      <img src={block.url} alt={block.caption || 'Editorial illustration'} style={{ width: '100%' }} />
                    </div>
                    {block.caption && (
                      <figcaption style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.6rem', fontStyle: 'italic', textAlign: 'center' }}>
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              // Paragraph with optional drop cap
              if (block.dropCap) {
                const firstLetter = block.text.charAt(0);
                const restOfText = block.text.slice(1);

                return (
                  <p key={idx} style={{ marginBottom: '1.75rem' }}>
                    <span
                      style={{
                        float: 'left',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '4.8rem',
                        lineHeight: 0.8,
                        paddingTop: '4px',
                        paddingRight: '12px',
                        paddingBottom: '4px',
                        color: 'var(--color-gold)',
                        fontWeight: 600
                      }}
                    >
                      {firstLetter}
                    </span>
                    {restOfText}
                  </p>
                );
              }

              return (
                <p key={idx} style={{ marginBottom: '1.75rem' }}>
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Related Articles Footer */}
          {relatedArticles.length > 0 && (
            <div style={{ maxWidth: '960px', margin: '0 auto', paddingTop: '4rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="eyebrow">Further Reading</span>
                <h3 className="editorial-title-md" style={{ textTransform: 'uppercase', marginTop: '0.5rem' }}>
                  From the Archive
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/journal/${rel.slug}`}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'center',
                      padding: '1rem',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: 'var(--color-soft-ivory)'
                    }}
                  >
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      style={{ width: '85px', height: '85px', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div>
                      <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                        {rel.category}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: '0.25rem 0' }}>
                        {rel.title}
                      </h4>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                        {rel.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default JournalArticle;
