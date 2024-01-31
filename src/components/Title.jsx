import React from "react";

function Title({ text = "Title Component", classes }) {
  return (
    <div>
      <h1 className={`text-4xl ${classes}`}>{text}</h1>
    </div>
  );
}

export default Title;
