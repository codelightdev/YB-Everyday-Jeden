import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { lastAddedItem } = useCart();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!lastAddedItem) return;

    setToast({
      title: 'Added to Bag',
      message: `${lastAddedItem.product.name} (${lastAddedItem.selectedColor})`,
      image: lastAddedItem.product.images[0]
    });

    const timer = setTimeout(() => {
      setToast(null);
    }, 4500);

    return () => clearTimeout(timer);
  }, [lastAddedItem]);

  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 'var(--z-modal)',
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-warm-white)',
        border: '1px solid var(--border-gold)',
        padding: '0.9rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
        maxWidth: '380px',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      role="alert"
    >
      {toast.image && (
        <img
          src={toast.image}
          alt={toast.message}
          style={{ width: '42px', height: '42px', objectFit: 'cover', flexShrink: 0 }}
        />
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)'
          }}
        >
          <Check size={12} strokeWidth={2.5} />
          {toast.title}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.95rem',
            lineHeight: 1.3,
            marginTop: '0.2rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {toast.message}
        </p>
      </div>
      <button
        onClick={() => setToast(null)}
        style={{ color: 'var(--color-stone)', padding: '0.2rem' }}
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
