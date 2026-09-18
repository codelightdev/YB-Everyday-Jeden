import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    // Check if device is desktop with fine pointer
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursorVisible) setCursorVisible(true);

      // Check hovered element for cursor directives
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setExpanded(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else if (e.target.closest('a, button, input, select, textarea')) {
        setExpanded(true);
        setCursorText('');
      } else {
        setExpanded(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId;
    const render = () => {
      // Smooth lerp follow
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorVisible]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 'var(--z-cursor)',
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform',
        opacity: cursorVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: cursorText ? '76px' : expanded ? '42px' : '8px',
          height: cursorText ? '76px' : expanded ? '42px' : '8px',
          marginLeft: cursorText ? '-38px' : expanded ? '-21px' : '-4px',
          marginTop: cursorText ? '-38px' : expanded ? '-21px' : '-4px',
          borderRadius: '50%',
          backgroundColor: cursorText ? 'rgba(10, 10, 10, 0.88)' : expanded ? 'rgba(184, 155, 94, 0.22)' : 'var(--color-gold)',
          border: cursorText ? '1px solid var(--color-gold)' : expanded ? '1px solid var(--color-gold)' : 'none',
          backdropFilter: cursorText ? 'blur(4px)' : 'none',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, margin 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {cursorText && (
          <span
            ref={cursorLabelRef}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'var(--color-warm-white)',
              textTransform: 'uppercase',
              userSelect: 'none'
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
