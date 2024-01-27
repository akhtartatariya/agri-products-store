import React from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import products from "../db";

function SilageAdditives() {
  // console.log(products.products);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Silage additives
      </div>
      <div className="p-10 flex gap-8">
        <ProductCard products={products.products} />
      </div>
    </>
  );
}

export default SilageAdditives;
