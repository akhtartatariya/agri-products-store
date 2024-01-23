import React, { useId } from "react";

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        className={`${className}`}
        {...props}
        ref={ref}
      />{" "}
    </>
  );
};

export default React.forwardRef(Input);
