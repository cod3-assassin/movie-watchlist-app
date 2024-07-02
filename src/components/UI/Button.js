import React from "react";

const Button = ({ onClick, icon: IconComponent, children }) => {
  return (
    <button onClick={onClick} className="btn">
      {IconComponent && <IconComponent className="btn-icon" />}
      {children}
    </button>
  );
};

export default Button;
