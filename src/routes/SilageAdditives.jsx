import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// import products from "../db";
import productService from "../firebase/product_service";

function SilageAdditives() {
  // console.log(products.products);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      productService.getAllProducts().then((product) => {
        // console.log(product);
        setProducts(product);
      });
    } catch (error) {
      console.log(":: error while loading products");
    }
  }, []);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Silage additives
      </div>
      <div className="p-10 flex flex-wrap max-sm:justify-center gap-8">
        <ProductCard products={products} />
      </div>
    </>
  );
}

export default SilageAdditives;
