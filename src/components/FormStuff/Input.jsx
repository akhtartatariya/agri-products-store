import React, { useId } from "react";

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      {label && <label htmlFor={id} className="font-semibold">{label}</label>}
      <input
        id={id}
        type={type}
        className={`${className} p-1.5` }
        {...props}
        ref={ref}
      />{" "}
    </>
  );
};

export default React.forwardRef(Input);
