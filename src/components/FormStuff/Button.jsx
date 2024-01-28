import React from "react";

const Button = ({ children, type, className = "", onClick, ...props }) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
export default Button;
