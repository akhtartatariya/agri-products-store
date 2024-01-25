import React from "react";

import { Link } from "react-router-dom";

function SilageAdditives() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-28 bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Silage additives
      </div>
    </>
  );
}

export default SilageAdditives;
