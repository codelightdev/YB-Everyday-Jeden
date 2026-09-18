import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Compass, ChevronRight, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { PRODUCTS, formatCurrency } from '../data/products';
import { COLLECTIONS } from '../data/collections';
import { JOURNAL_ARTICLES } from '../data/journal';
import ProductGrid from '../components/shop/ProductGrid';
import OptiqueSwiper from '../components/shop/OptiqueSwiper';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';
import { initCinematicScroll } from '../animations/pageAnimations';

export const Home = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroBgRef = useRef(null);

  const jedenProducts = PRODUCTS.filter(p => p.collection === 'jeden' || p.featured).slice(0, 4);
  const jewelryProducts = PRODUCTS.filter(p => p.category === 'Jewelry').slice(0, 4);
  const optiqueProducts = PRODUCTS.filter(p => p.category === 'Optique');

  useEffect(() => {
    // Hero Entrance GSAP Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      heroBgRef.current,
      { scale: 1.15, filter: 'brightness(0.6)' },
      { scale: 1, filter: 'brightness(0.88)', duration: 2.2, ease: 'power2.out' },
      0.2
    )
    .fromTo(
      heroHeadlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.3 },
      0.6
    )
    .fromTo(
      heroSubtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1 },
      0.9
    )
    .fromTo(
      heroCtaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      1.1
    );

    // Initialize cinematic scroll animations across the homepage
    const cleanupScroll = initCinematicScroll(containerRef.current);

    return () => {
      tl.kill();
      if (cleanupScroll) cleanupScroll();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <SeoMeta
        title="YB EVERYDAY / JEDEN — RADIANCE | Luxury Jewelry & L'Optique"
        description="Contemporary luxury fashion house specializing in fine jewelry, L'Optique sculpted frames, and Jeden objects of radiance. Designed between Lagos, London, and Paris."
        canonical="/"
        keywords="luxury fashion, African luxury, fine jewelry, L'Optique eyewear, solid gold, Jeden collection, Radiance"
      />

      {/* 1. CINEMATIC HERO */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '680px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-obsidian)',
          color: 'var(--color-warm-white)',
          overflow: 'hidden'
        }}
      >
        {/* Background Editorial Visual with Subtle Motion */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.7)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%'
          }}
        />

        {/* Ambient Film Grain / Radial Shading */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            background: 'radial-gradient(circle at center, transparent 30%, rgba(10, 10, 10, 0.75) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Hero Content Overlay */}
        <div
          className="container-luxury"
          style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            maxWidth: '1000px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '3rem'
          }}
        >
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              className="eyebrow"
              style={{
                color: 'var(--color-gold-light)',
                letterSpacing: '0.38em',
                fontSize: '0.76rem'
              }}
            >
              YB EVERYDAY / JEDEN · SERIES 2026
            </span>
          </div>

          <h1
            ref={heroHeadlineRef}
            className="editorial-title-xl"
            style={{
              color: 'var(--color-warm-white)',
              marginBottom: '1.25rem',
              letterSpacing: '0.06em'
            }}
          >
            RADIANCE
          </h1>

          <p
            ref={heroSubtextRef}
            className="editorial-subheading"
            style={{
              color: 'rgba(250, 249, 246, 0.88)',
              maxWidth: '620px',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              marginBottom: '2.5rem',
              letterSpacing: '0.02em'
            }}
          >
            “Objects of expression, designed for every day.”
          </p>

          <div
            ref={heroCtaRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem'
            }}
          >
            <Button
              to="/shop"
              variant="gold"
              size="lg"
              cursorText="SHOP"
            >
              Shop Collection
            </Button>
            <Button
              to="/about"
              variant="outlineLight"
              size="lg"
              cursorText="EXPLORE"
            >
              Discover YB
            </Button>
          </div>
        </div>

        {/* Subtle Bottom Indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: 0,
            width: '100%',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 clamp(1.5rem, 5vw, 4rem)',
            fontSize: '0.7rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(250, 249, 246, 0.5)'
          }}
        >
          <span>Fine Jewelry & L'Optique</span>
          <span className="floating-coordinate" data-parallax-depth="15">
            06°27'N · 03°23'E
          </span>
          <span>Lagos · London · Paris</span>
        </div>
      </section>

      {/* 2. THE JEDEN COLLECTION SHOWCASE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container-luxury">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="eyebrow">Series 01 · Permanent</span>
              <h2 className="editorial-title-lg" style={{ marginTop: '0.5rem', textTransform: 'uppercase' }} data-reveal-text>
                The Jeden Collection
              </h2>
              <p className="editorial-subheading" style={{ marginTop: '0.5rem' }} data-reveal-text>
                “Pieces designed to become part of your everyday language.”
              </p>
            </div>
            <Link
              to="/collections/jeden"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--color-obsidian)',
                borderBottom: '1px solid var(--color-gold)',
                paddingBottom: '0.25rem'
              }}
              data-cursor="JEDEN"
            >
              <span>Explore The Jeden Lookbook</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <ProductGrid products={jedenProducts} columns={4} />
        </div>
      </section>

      {/* 3. ASYMMETRIC EDITORIAL JEWELRY SECTION */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          color: 'var(--color-warm-white)',
          position: 'relative'
        }}
      >
        <div className="container-luxury">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 6vw, 6rem)',
              alignItems: 'center',
              marginBottom: '4.5rem'
            }}
          >
            {/* Left Column: Asymmetric Big Photography */}
            <div
              className="image-reveal-wrap"
              style={{
                aspectRatio: '3 / 4',
                position: 'relative'
              }}
              data-cursor="JEWELRY"
              data-reveal-image
            >
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1400&auto=format&fit=crop"
                alt="Fine Jewelry by YB"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  backgroundColor: 'rgba(10, 10, 10, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '1rem 1.5rem',
                  borderLeft: '2px solid var(--color-gold)'
                }}
              >
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                  Signature Metallurgy
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem' }}>
                  Solid 18K Gold & Sterling Silver
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Copy and Category Showcase */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
                Jewelry Atelier
              </span>
              <h2
                className="editorial-title-lg"
                style={{
                  color: 'var(--color-warm-white)',
                  textTransform: 'uppercase',
                  margin: '1rem 0 1.5rem'
                }}
                data-reveal-text
              >
                Designed Around the Details That Make You, You
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-inverse-muted)',
                  marginBottom: '2rem'
                }}
                data-reveal-text
              >
                From the razor-sharp facets of the Radiance Signet to the fluid weight of our Double Helix Chains, every YB jewelry piece is cast to balance anatomical ergonomics with unapologetic architectural poise.
              </p>

              {/* Jewelry Subcategory Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem',
                  marginBottom: '2.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '1.5rem'
                }}
              >
                {[
                  { title: 'Rings', desc: 'Faceted signets & molten bands' },
                  { title: 'Chains', desc: 'Asymmetric diamond-cut links' },
                  { title: 'Bracelets', desc: 'Onyx inset cuffs & tennis lines' },
                  { title: 'Earrings', desc: 'Architectural ear cuffs & droplets' }
                ].map((cat, i) => (
                  <div key={i}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-warm-white)' }}>
                      {cat.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-inverse-muted)', marginTop: '0.2rem' }}>
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                to="/shop/jewelry"
                variant="gold"
                size="lg"
                cursorText="EXPLORE"
              >
                Explore Fine Jewelry
              </Button>
            </div>
          </div>

          {/* Curated Jewelry Products Row */}
          <div style={{ marginTop: '2rem' }}>
            <ProductGrid products={jewelryProducts} columns={4} />
          </div>
        </div>
      </section>

      {/* 4. L'OPTIQUE: FLUID CINEMATIC SWIPER SHOWCASE */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--color-soft-ivory)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container-luxury">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <span className="eyebrow">L'Optique Series</span>
              <h2 className="editorial-title-lg" style={{ marginTop: '0.5rem', textTransform: 'uppercase' }} data-reveal-text>
                Optique — See Differently
              </h2>
              <p className="editorial-subheading" style={{ marginTop: '0.5rem' }} data-reveal-text>
                “Architectural frames for the way you see the world.”
              </p>
            </div>

            <Button
              to="/shop/optique"
              variant="outline"
              size="md"
              cursorText="OPTIQUE"
            >
              Explore L'Optique
            </Button>
          </div>

          {/* Elegant Interactive Swiper / Carousel */}
          <OptiqueSwiper products={optiqueProducts} />
        </div>
      </section>

      {/* 5. RADIANCE MANIFESTO BANNER */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          color: 'var(--color-warm-white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="container-luxury"
          style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)'
              }}
            >
              The Brand Manifesto
            </span>
          </div>

          <h2
            className="editorial-title-lg"
            style={{
              lineHeight: 1.15,
              textTransform: 'uppercase',
              marginBottom: '2rem',
              fontWeight: 300
            }}
            data-reveal-text
          >
            Radiance is light interacting with identity.
            <br />
            Subtle luxury. Everyday elegance.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--text-inverse-muted)',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}
            data-reveal-text
          >
            “Designed to be noticed. Made to be remembered.”
          </p>

          <Button
            to="/about"
            variant="outlineLight"
            size="md"
            cursorText="READ"
          >
            Read The Full Philosophy
          </Button>
        </div>
      </section>

      {/* 6. EDITORIAL JOURNAL MAGAZINE SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-luxury">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="eyebrow">The YB Journal</span>
              <h2 className="editorial-title-lg" style={{ marginTop: '0.5rem', textTransform: 'uppercase' }} data-reveal-text>
                Essays on Form & Style
              </h2>
            </div>
            <Link
              to="/journal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--color-obsidian)',
                borderBottom: '1px solid var(--color-gold)',
                paddingBottom: '0.25rem'
              }}
              data-cursor="JOURNAL"
            >
              <span>View All Issues</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
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
                    aspectRatio: '16 / 10',
                    backgroundColor: 'var(--color-charcoal)'
                  }}
                  data-reveal-image
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
                      fontSize: '1.45rem',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: 'var(--color-obsidian)'
                    }}
                  >
                    {article.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {article.excerpt}
                </p>

                <Link
                  to={`/journal/${article.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--color-obsidian)',
                    marginTop: '0.5rem'
                  }}
                >
                  <span>Read Article</span>
                  <ChevronRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
