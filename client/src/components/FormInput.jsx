import React from 'react';

function FormInput({ type, placeholder, label, onChange }) {
  return (
    <div className="webinar-form">
      {label && <label>{label}:</label>}
      <input
        className="webinar-form__input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
