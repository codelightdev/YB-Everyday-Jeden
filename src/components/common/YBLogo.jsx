import React from 'react';
import { Link } from 'react-router-dom';

/**
 * YBLogo Component
 * Original geometric monogram with interlocking Y and B architectural lines.
 * Supported themes: 'dark' (obsidian), 'light' (ivory/white), 'gold' (metallic gold).
 * Display modes: 'full' (monogram + lockup), 'mark' (monogram only), 'text' (minimal typographic lockup).
 */
export const YBLogo = ({
  theme = 'dark',
  mode = 'full',
  size = 'md',
  className = '',
  to = '/'
}) => {
  // Theme color definitions
  const colors = {
    dark: {
      primary: '#0A0A0A',
      secondary: '#1F1F1F',
      accent: '#B89B5E',
      text: '#0A0A0A',
      subtext: '#5A5752'
    },
    light: {
      primary: '#FAF9F6',
      secondary: '#E8E5DD',
      accent: '#CDB784',
      text: '#FAF9F6',
      subtext: '#B8B2A8'
    },
    gold: {
      primary: '#B89B5E',
      secondary: '#8C733B',
      accent: '#D4AF37',
      text: '#B89B5E',
      subtext: '#B89B5E'
    }
  };

  const currentTheme = colors[theme] || colors.dark;

  // Scale dimensions
  const dimensions = {
    sm: { markSize: 26, titleSize: '0.85rem', subSize: '0.55rem', gap: '0.5rem' },
    md: { markSize: 34, titleSize: '1.05rem', subSize: '0.62rem', gap: '0.75rem' },
    lg: { markSize: 46, titleSize: '1.4rem', subSize: '0.75rem', gap: '1rem' }
  };

  const dim = dimensions[size] || dimensions.md;

  const MonogramSVG = (
    <svg
      width={dim.markSize}
      height={dim.markSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-label="YB Monogram"
    >
      {/* Outer subtle geometric bounding circle */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke={currentTheme.accent}
        strokeWidth="1.2"
        strokeOpacity="0.4"
        strokeDasharray="2 4"
      />
      {/* Precision Interlocking Y & B Monogram */}
      {/* Left arm of Y */}
      <path
        d="M26 28L46 52V76"
        stroke={currentTheme.primary}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Right arm of Y, intersecting seamlessly */}
      <path
        d="M66 28L46 52"
        stroke={currentTheme.primary}
        strokeWidth="4"
        strokeLinecap="square"
      />
      {/* Spine of B interlocking with stem of Y */}
      <line
        x1="54"
        y1="34"
        x2="54"
        y2="76"
        stroke={currentTheme.accent}
        strokeWidth="3.5"
        strokeLinecap="square"
      />
      {/* Upper lobe of B */}
      <path
        d="M54 36H66C72.6 36 78 40.5 78 47C78 53.5 72.6 57 66 57H54"
        stroke={currentTheme.primary}
        strokeWidth="3.5"
        strokeLinecap="square"
      />
      {/* Lower lobe of B */}
      <path
        d="M54 57H69C75.6 57 81 61.5 81 68C81 74.5 75.6 78 69 78H54"
        stroke={currentTheme.primary}
        strokeWidth="3.5"
        strokeLinecap="square"
      />
      {/* Central Radiance Accent Spark */}
      <circle cx="50" cy="52" r="2.2" fill={currentTheme.accent} />
    </svg>
  );

  const LogoContent = (
    <div
      className={`yb-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dim.gap,
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {mode !== 'text' && MonogramSVG}
      {mode !== 'mark' && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: dim.titleSize,
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: currentTheme.text,
              textTransform: 'uppercase'
            }}
          >
            YB EVERYDAY
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.15rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: dim.subSize,
                fontWeight: 500,
                letterSpacing: '0.35em',
                color: currentTheme.subtext,
                textTransform: 'uppercase'
              }}
            >
              JEDEN
            </span>
            <span
              style={{
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                backgroundColor: currentTheme.accent,
                display: 'inline-block'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: dim.subSize,
                fontWeight: 600,
                letterSpacing: '0.35em',
                color: currentTheme.accent,
                textTransform: 'uppercase'
              }}
            >
              RADIANCE
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} aria-label="YB EVERYDAY / JEDEN Home">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
};

export default YBLogo;
