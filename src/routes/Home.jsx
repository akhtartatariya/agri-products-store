import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import slides from "../db";

// import products from "../db";
import productService from "../firebase/product_service";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      productService.getAllProducts().then((products) => {
        setProducts(products);
        console.log(products);
      });
    } catch (error) {
      console.log("Error while loading products:", error);
    }
  }, []);

  return (
    <>
      <div>
        {/* Carousel For Home Page */}
        <Carousel
          data={slides.slides}
          text={"Produce Tasty Silages and avoid reheating"}
        />
      </div>
      {/* Products Below Carousel */}
      <div className="grid grid-cols-[1fr_1fr] px-20 py-24">
        {/* Product Category 1 */}
        <div className="flex justify-between border-r-2 pr-10 border-gray-200">
          <ProductCard
            products={products.filter(
              (item) =>
                item.technology === "RapidReact" &&
                (item.used_for === "Corn" || "Grass") &&
                item.product_name !== "Pioneer® 11CH4"
            )}
          />
        </div>
        {/* Product Category 2 */}
        <div className="flex justify-between border-l-2 pl-10 border-gray-200">
          <ProductCard
            products={products.filter(
              (item) =>
                item.technology === "FiberTechnology" &&
                (item.used_for === "Corn" || "Grass") &&
                item.product_name !== "Pioneer® 11F79"
            )}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
