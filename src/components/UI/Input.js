import React from "react";
import "../../styles/input.css";

const Input = ({ name, value, onChange, placeholder, required = false }) => (
  <div className="input-group">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="input"
    />
  </div>
);

export default Input;
