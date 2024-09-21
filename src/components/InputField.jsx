import React from 'react';

function InputField({ label, type, id, placeholder }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} />
    </div>
  );
}

export default InputField;
