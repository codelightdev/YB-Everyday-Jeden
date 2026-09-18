import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon = null,
  cursorText,
  ...rest
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.65rem',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.22em',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    border: '1px solid transparent',
    width: fullWidth ? '100%' : 'auto',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };

  const sizeStyles = {
    sm: { padding: '0.55rem 1.25rem', fontSize: '0.7rem' },
    md: { padding: '0.9rem 2rem', fontSize: '0.75rem' },
    lg: { padding: '1.15rem 2.8rem', fontSize: '0.82rem' }
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-obsidian)',
      color: 'var(--color-warm-white)',
      borderColor: 'var(--color-obsidian)',
      ':hover': {
        backgroundColor: '#1E1E1E',
        borderColor: 'var(--color-gold)'
      }
    },
    secondary: {
      backgroundColor: 'var(--color-warm-white)',
      color: 'var(--color-obsidian)',
      borderColor: 'var(--color-obsidian)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-obsidian)',
      borderColor: 'rgba(10, 10, 10, 0.28)'
    },
    outlineLight: {
      backgroundColor: 'transparent',
      color: 'var(--color-warm-white)',
      borderColor: 'rgba(255, 255, 255, 0.35)'
    },
    gold: {
      backgroundColor: 'var(--color-gold)',
      color: 'var(--color-obsidian)',
      borderColor: 'var(--color-gold)',
      fontWeight: 600
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'inherit',
      border: 'none',
      padding: 0,
      borderBottom: '1px solid currentColor'
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...(sizeStyles[size] || sizeStyles.md),
    ...(variantStyles[variant] || variantStyles.primary)
  };

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={14} style={{ flexShrink: 0 }} />}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        style={combinedStyles}
        className={`luxury-button btn-${variant} ${className}`}
        data-cursor={cursorText}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyles}
        className={`luxury-button btn-${variant} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={cursorText}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyles}
      className={`luxury-button btn-${variant} ${className}`}
      data-cursor={cursorText}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
