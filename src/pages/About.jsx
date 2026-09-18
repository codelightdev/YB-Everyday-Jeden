import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/common/Button';
import SeoMeta from '../components/common/SeoMeta';

export const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on full-width images
      const parallaxImages = containerRef.current.querySelectorAll('.parallax-editorial-img');
      parallaxImages.forEach(img => {
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <SeoMeta
        title="The YB Philosophy | YB EVERYDAY / JEDEN"
        description="The story of YB EVERYDAY / JEDEN. An editorial exploration of contemporary luxury, everyday objects of expression, fine jewelry, and L'Optique frames."
        canonical="/about"
      />

      {/* Hero Section */}
      <section
        style={{
          paddingTop: 'calc(var(--header-height) + 5rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          backgroundColor: 'var(--bg-primary)',
          textAlign: 'center'
        }}
      >
        <div className="container-luxury" style={{ maxWidth: '960px' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem' }}>
            Atelier Manifesto
          </span>
          <h1
            className="editorial-title-xl"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '1.5rem',
              lineHeight: 0.98
            }}
          >
            The YB Philosophy
          </h1>
          <p
            className="editorial-subheading"
            style={{
              fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)',
              maxWidth: '740px',
              margin: '0 auto',
              lineHeight: 1.5
            }}
          >
            “Luxury without unnecessary noise. Objects of personal expression, precision-engineered for the cadence of daily life.”
          </p>
        </div>
      </section>

      {/* Full-bleed Photo 1 */}
      <section style={{ height: '70vh', minHeight: '440px', overflow: 'hidden', position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1800&auto=format&fit=crop"
          alt="YB Jewelry Craftsmanship"
          className="parallax-editorial-img"
          style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%' }}
        />
      </section>

      {/* Section 1: WHO WE ARE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container-luxury">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 6vw, 6rem)',
              alignItems: 'baseline'
            }}
          >
            <div>
              <span className="eyebrow">01 / Foundation</span>
              <h2 className="editorial-title-lg" style={{ textTransform: 'uppercase', marginTop: '0.5rem' }}>
                Who We Are
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              <p>
                YB EVERYDAY / JEDEN is a contemporary luxury house that operates at the vital crossroads of fine jewelry, L'Optique sculpted frames, horology, and everyday lifestyle objects. We were founded on a simple yet radical conviction: that true luxury should be lived in, not stored away.
              </p>
              <p>
                Conceived between the coastal cosmopolitan dynamism of Lagos and international European ateliers, our perspective is polyphonic. We reject the generic tropes of traditional jewelry stores—the velvet cases, the excessive pricing markups, the fear of wearing precious metals while going about one’s day. Instead, we craft objects with architectural discipline and tactile substance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: THE IDEA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-obsidian)', color: 'var(--color-warm-white)' }}>
        <div className="container-luxury">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 6vw, 6rem)',
              alignItems: 'baseline'
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
                02 / Core Thesis
              </span>
              <h2 className="editorial-title-lg" style={{ textTransform: 'uppercase', marginTop: '0.5rem', color: 'var(--color-warm-white)' }}>
                The Idea: Radiance
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-inverse-muted)' }}>
              <p>
                At the heart of everything we construct lies the concept of <strong>RADIANCE</strong>. Radiance is not flashiness; it is how natural light interacts with a metallic plane, how shadow carves depth into an acetate frame, and how the wearer feels upon glancing in a mirror before stepping out.
              </p>
              <p>
                When an object is engineered with authentic proportions, it requires no oversized logos to validate its worth. The bevel on a signet ring, the thickness of an aviator browbar, the soft tactile click of a double-safety chain clasp—these are the subtle indicators of enduring discernment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed Photo 2 */}
      <section style={{ height: '70vh', minHeight: '440px', overflow: 'hidden', position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1800&auto=format&fit=crop"
          alt="YB Optique Atelier Studio"
          className="parallax-editorial-img"
          style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%' }}
        />
      </section>

      {/* Section 3: THE DETAILS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-soft-ivory)' }}>
        <div className="container-luxury">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 6vw, 6rem)',
              alignItems: 'baseline'
            }}
          >
            <div>
              <span className="eyebrow">03 / Materiality</span>
              <h2 className="editorial-title-lg" style={{ textTransform: 'uppercase', marginTop: '0.5rem' }}>
                The Details
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  Solid & Vermeil Metallurgy
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  We prioritize solid 925 sterling silver, thick 18k gold vermeil (minimum 2.5 microns), surgical grade 316L stainless steel, and natural gemstone cabochons such as Brazilian black onyx. No cheap base alloys; only metals built to develop a lifetime of character.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  Japanese Cellulose & Titanium
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  Our frames are carved from cotton-derived cellulose acetate cured for nine months to ensure dimensional stability. Optical spectacles utilize medical-grade beta-titanium wire, resulting in frames so light they rest like a whisper across the bridge of your nose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: THE FUTURE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-obsidian)', color: 'var(--color-warm-white)', textAlign: 'center' }}>
        <div className="container-luxury" style={{ maxWidth: '840px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)', marginBottom: '1rem' }}>
            04 / Horizon
          </span>
          <h2 className="editorial-title-lg" style={{ textTransform: 'uppercase', color: 'var(--color-warm-white)', marginBottom: '1.5rem' }}>
            The Future
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--text-inverse-muted)',
              marginBottom: '2.5rem'
            }}
          >
            As YB EVERYDAY / JEDEN expands across continents, our core commitment remains unchanged: to design objects that become part of your everyday language. Not about wearing more—about wearing what means something.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem' }}>
            <Button to="/shop" variant="gold" size="lg">
              Explore The Catalog
            </Button>
            <Button to="/contact" variant="outlineLight" size="lg">
              Private Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
