import React from "react";

function FormGroup({
  label,
  type,
  placeholder,
  disabled = false,
  classes,
  value,
  onChange,
  reference,
  name,
  input_outline_color,
  className="",
}) {
  return (
    <div className={`${classes}`}>
      <label className={`${className}font-semibol`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        ref={reference}
        name={name}
        className={`block mt-2 w-full p-1 ${input_outline_color} bg-gray-100 rounded-lg`}
      />
    </div>
  );
}

export default FormGroup;
