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
      { scale: 1.12, filter: 'brightness(0.7)' },
      { scale: 1, filter: 'brightness(0.95)', duration: 1.8, ease: 'power2.out' },
      0
    );
  }

  if (headlineRef) {
    tl.fromTo(
      headlineRef,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      0.4
    );
  }

  if (subtextRef) {
    tl.fromTo(
      subtextRef,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0 },
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
 * Reveal image via clip-path upon scroll
 */
export const initImageReveals = (scopeRef) => {
  if (!scopeRef || prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    const images = scopeRef.querySelectorAll('[data-reveal-image]');
    images.forEach(img => {
      gsap.fromTo(
        img,
        { clipPath: 'inset(15% 0% 15% 0%)', opacity: 0.6, scale: 1.06 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            once: true
          }
        }
      );
    });
  }, scopeRef);

  return () => ctx.revert();
};

/**
 * Text element stagger reveal
 */
export const initTextReveals = (scopeRef) => {
  if (!scopeRef || prefersReducedMotion()) return;

  const ctx = gsap.context(() => {
    const textEls = scopeRef.querySelectorAll('[data-reveal-text]');
    textEls.forEach(el => {
      gsap.fromTo(
        el,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });
  }, scopeRef);

  return () => ctx.revert();
};

export { gsap, ScrollTrigger };
