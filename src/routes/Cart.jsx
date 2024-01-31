import React from "react";

import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Cart
      </div>
    </>
  );
}

export default Cart;
