import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Animate page entrance smoothly
 */
export const animatePageIn = (containerRef) => {
  if (!containerRef || prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      containerRef,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'transform'
      }
    );
  }, containerRef);

  return () => ctx.revert();
};

/**
 * Hero section cinematic load sequence
 */
export const animateHero = ({
  headlineRef,
  subtextRef,
  ctaRef,
  imageRef
}) => {
  if (prefersReducedMotion()) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (imageRef) {
    tl.fromTo(
      imageRef,
      { scale: 1.15, filter: 'brightness(0.65)' },
      { scale: 1, filter: 'brightness(0.92)', duration: 2.2, ease: 'power2.out' },
      0
    );
  }

  if (headlineRef) {
    tl.fromTo(
      headlineRef,
      { y: 50, opacity: 0, letterSpacing: '0.01em' },
      { y: 0, opacity: 1, letterSpacing: '0.08em', duration: 1.5, ease: 'power2.out' },
      0.3
    );
  }

  if (subtextRef) {
    tl.fromTo(
      subtextRef,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1 },
      0.7
    );
  }

  if (ctaRef) {
    tl.fromTo(
      ctaRef,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      0.95
    );
  }

  return tl;
};

/**
 * Cinematic ScrollTrigger animations across any page
 */
export const initCinematicScroll = (scopeRef) => {
  if (!scopeRef || prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    // 1. Image Mask Slit Reveals
    const revealImages = scopeRef.querySelectorAll('[data-reveal-image]');
    revealImages.forEach(img => {
      gsap.fromTo(
        img,
        { clipPath: 'polygon(0 15%, 100% 15%, 100% 85%, 0 85%)', opacity: 0.5, scale: 1.08 },
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // 2. Headings Kerning & Slide Reveal
    const headings = scopeRef.querySelectorAll('[data-reveal-text]');
    headings.forEach(heading => {
      gsap.fromTo(
        heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    // 3. Subtle Parallax Float
    const parallaxItems = scopeRef.querySelectorAll('[data-parallax-depth]');
    parallaxItems.forEach(item => {
      const speed = parseFloat(item.getAttribute('data-parallax-depth') || '20');
      gsap.to(item, {
        y: -speed,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // 4. Radiance Shimmer sweep on section dividers
    const rules = scopeRef.querySelectorAll('.editorial-rule, .editorial-rule-dark');
    rules.forEach(rule => {
      gsap.fromTo(
        rule,
        { scaleX: 0, opacity: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: rule,
            start: 'top 90%',
            once: true
          }
        }
      );
    });
  }, scopeRef);

  return () => ctx.revert();
};

export { gsap, ScrollTrigger };
