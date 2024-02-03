import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// import products from "../db";
import productService from "../firebase/product_service";
import Title from "../components/Title";

//Icons
import { CgClose, CgCloseO } from "react-icons/cg";

function SilageAdditives() {
  // console.log(products.products);
  //States
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

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
          <div className="animate__animated animate__pulse animate__infinite my-8 text-white text-sm h-11 flex items-center justify-center w-3/4 bg-[#0073cf] shadow-lg border-solid border-2 border-opacity-30 border-gray-600 rounded-lg">
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
      {/* PRODUCTS */}
      <div className="w-full border-b-4 border-slate-30000 h-60 pt-16 px-28">
        <Title text="Products" className={"text-5xl font-bold"} />
        <p className="mt-8">
          Choose your products from our catalog and start benefiting from the
          quality of Pioneer inoculants. Make your selection, complete your
          purchase and receive your shipment comfortably at the address you
          indicate within 2-3 days.
        </p>
      </div>

      {/* FILTER SECTION */}
      <section className="px-28">
        {/* SORT */}
        <div>
          {filter && (
            <div>
              <div>
                <h3>Filters</h3>
                <span>
                  <p>Clear All</p>
                  <CgCloseO />
                </span>
              </div>
              {/* Filter Selected Items */}
              <div>
                {filteredItems.map((item, index) => {
                  return (
                    <div id={index}>
                      <span>Used for: {item}</span>
                      <CgClose />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {/* PRODUCT LIST */}
        <div></div>
      </section>

      {/* <div className="p-10 flex flex-wrap max-sm:justify-center gap-8">
        <ProductCard products={products} />
      </div> */}
    </div>
  );
}

export default SilageAdditives;
