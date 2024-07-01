import React from "react";
import "./Input.css";

const Input = ({ label, value, onChange, className = "", ...props }) => {
  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <input value={value} onChange={onChange} {...props} />
    </div>
  );
};

export default Input;
