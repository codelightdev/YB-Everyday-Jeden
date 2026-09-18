import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { YBLogo } from './YBLogo';

export const Preloader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only run on fresh initial visit or full page reload
    const hasLoaded = sessionStorage.getItem('yb_preloader_seen');

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('yb_preloader_seen', 'true');
        setVisible(false);
        if (onComplete) onComplete();
      }
    });

    const duration = hasLoaded ? 0.9 : 1.8;

    tl.to(progressLineRef.current, {
      scaleX: 1,
      duration: duration * 0.7,
      ease: 'power2.inOut',
      transformOrigin: 'left'
    })
    .to(contentRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.4,
      ease: 'power2.in'
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut'
    });

    return () => tl.kill();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-obsidian)',
        zIndex: 'var(--z-preloader)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-warm-white)'
      }}
      role="progressbar"
      aria-label="Loading YB EVERYDAY"
    >
      <div
        ref={contentRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        <YBLogo theme="light" mode="full" size="lg" to={null} />

        <div
          style={{
            width: '160px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '1rem'
          }}
        >
          <div
            ref={progressLineRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--color-gold)',
              transform: 'scaleX(0)',
              transformOrigin: 'left'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
