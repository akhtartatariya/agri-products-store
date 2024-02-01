import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// import products from "../db";
import productService from "../firebase/product_service";

function SilageAdditives() {
  // console.log(products.products);
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      productService.getAllProducts().then((product) => {
        // console.log(product);
        setProducts(product);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(":: error while loading products");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[100vh]">
        <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
          <Link to={"/"}>Home</Link> &nbsp;/ Silage additives
        </div>
        <div className="flex justify-center w-full">
          <div className="animate__animated animate__pulse animate__infinite my-8 text-white text-center p-4 w-3/4 bg-[#0073cf] shadow-lg border-solid border-2 border-opacity-30 border-gray-600 rounded-lg">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh]">
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Silage additives
      </div>

      <div className="p-10 flex flex-wrap max-sm:justify-center gap-8">
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export default SilageAdditives;
