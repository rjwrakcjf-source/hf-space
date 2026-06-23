import React from 'react';

export function Input({ label, error, ...props }) {
  return (
    <div className="form-field">
      {label && <label className="form-label">{label}</label>}
      <input className={`form-input${error ? ' form-input--error' : ''}`} {...props} />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

export function Select({ label, options = [], error, ...props }) {
  return (
    <div className="form-field">
      {label && <label className="form-label">{label}</label>}
      <select className="form-select" {...props}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ label, error, ...props }) {
  return (
    <div className="form-field">
      {label && <label className="form-label">{label}</label>}
      <textarea className="form-textarea" {...props} />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

export function Checkbox({ label, ...props }) {
  return (
    <label className="form-checkbox">
      <input type="checkbox" {...props} />
      {label && <span>{label}</span>}
    </label>
  );
}
