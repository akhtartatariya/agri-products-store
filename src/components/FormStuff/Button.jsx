import React from "react";

const Button = ({ children, type, className = "", ...props }) => {
  return (
    <button type={type} className={`${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
