import React, { forwardRef, useId } from "react";
const Select = (
  { label, options, className = "", defaultValue, ...props },
  ref
) => {
  const id = useId();
  return (
    <>
      {label && (
        <label className="" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        defaultValue={defaultValue}
        className={`${className} block w-full rounded-md border-gray-300 py-2 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm`}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default forwardRef(Select);
