import React from "react";

function Title({ text = "Title Component", className = "" }) {
  return (
    <div>
      <h1 className={`${className}`}>{text}</h1>
    </div>
  );
}

export default Title;
