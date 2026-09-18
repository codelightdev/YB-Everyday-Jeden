import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  children,
  className = '',
  style = {}
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align === 'center' ? 'center' : align === 'right' ? 'right' : 'left',
        maxWidth: align === 'center' ? '820px' : '940px',
        marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        ...style
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '0.85rem' }}>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2
          className="editorial-title-lg"
          style={{
            color: isDark ? 'var(--color-warm-white)' : 'var(--color-obsidian)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: subtitle ? '1rem' : '0'
          }}
          data-reveal-text
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className="editorial-subheading"
          style={{
            color: isDark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
            maxWidth: '680px',
            marginLeft: align === 'center' ? 'auto' : undefined,
            marginRight: align === 'center' ? 'auto' : undefined,
            lineHeight: 1.6
          }}
          data-reveal-text
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};

export default SectionHeading;
