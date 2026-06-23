import React, { useEffect } from 'react';

export function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          {title && <h2>{title}</h2>}
          <button onClick={onClose} className="modal__close">&times;</button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export function Dialog({ isOpen, onClose, onConfirm, title, message }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p>{message}</p>
      <div className="dialog__actions">
        <button onClick={onClose}>Cancel</button>
        <button onClick={onConfirm} className="btn btn--primary">Confirm</button>
      </div>
    </Modal>
  );
}

export function Drawer({ isOpen, onClose, position = 'right', children }) {
  if (!isOpen) return null;
  return (
    <div className={`drawer drawer--${position}`}>
      <button onClick={onClose} className="drawer__close">&times;</button>
      {children}
    </div>
  );
}
