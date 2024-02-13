import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import slides from "../db";

// import products from "../db";
import productService from "../firebase/product_service";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import { Link } from "react-router-dom";

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
                (item.used_for === "Corn" || item.used_for === "Grass") &&
                (item.product_name === "Pioneer® 11C33" ||
                  item.product_name === "Pioneer® 11G22")
            )}
          />
        </div>
        {/* Product Category 2 */}
        <div className="flex justify-between border-l-2 pl-10 border-gray-200">
          <ProductCard
            products={products.filter(
              (item) =>
                item.technology === "FiberTechnology" &&
                (item.used_for === "Corn" || item.used_for === "Grass") &&
                (item.product_name === "Pioneer® 11CFT" ||
                  item.product_name === "Pioneer® 11GFT")
            )}
          />
        </div>
      </div>
      {/* Youtube Embbed */}
      <div>
        <Title
          text="Get the best forage,
thanks to the most advanced technology"
          className="text-3xl font-bold text-center whitespace-pre-line mb-8"
        />
        {/* Youtube card Box Start */}
        <div className="grid grid-cols-[1fr_1fr] px-20 pb-12">
          {/* Youtube Card */}
          <div className="flex flex-col justify-between border-r-2 pr-10 border-gray-200">
            <div className="w-full h-[18rem]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/s-aHf8t1WOc?si=PFsDP2hnu-sEY98q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="px-4 py-6">
              <h1 className="text-3xl font-bold text-[#0073cf] mb-6">
                Pioneer Rapid React
              </h1>
              <p className="text-sm w-[24rem]">
                Click here to see our full range of products to improve the
                stability of your silos.{" "}
                <Link to={"/silage_additives"}>
                  <span className="text-[#0073cf]">Buy inoculants</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Youtube Card */}
          <div className="flex flex-col justify-between border-l-2 pl-10 border-gray-200">
            <div className="w-full h-[18rem]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/w3tIuZA2F8U?si=liYpCNqDy3moSu8S"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="px-4 py-6">
              <h1 className="text-3xl font-bold text-[#0073cf] mb-6">
                Pioneer Fiber Technology
              </h1>
              <p className="text-sm w-[24rem]">
                Click here to see our full range of products to improve the
                stability of your silos.{" "}
                <Link to={"/silage_additives"}>
                  <span className="text-[#0073cf]">Buy inoculants</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Youtube Card Box End */}
      </div>
    </>
  );
}

export default Home;
