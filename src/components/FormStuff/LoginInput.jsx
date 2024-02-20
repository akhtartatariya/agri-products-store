import React, { useId } from "react";

const LoginInput = ({
  label,
  type = "text",
  className = "",
  input_outline_color,
  classes,
  ...props
},ref) => {
  const id = useId();
  return (
    <>
    <div className={`w-full ${classes}`}>
      {label && (
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`block mt-2 w-full p-1 ${input_outline_color} bg-gray-100 rounded-lg`}
        {...props}
        ref={ref}
      />{" "}
      </div>
    </>
  );
};

export default React.forwardRef(LoginInput);
