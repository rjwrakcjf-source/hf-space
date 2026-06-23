import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', disabled, onClick, className = '', ...props }) {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function IconButton({ icon, label, ...props }) {
  return (
    <Button aria-label={label} {...props}>
      {icon}
    </Button>
  );
}
