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
      <div className="bg-gray-50">
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
              <div className="px-4 py-8 bg-white">
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
              <div className="px-4 py-8 bg-white">
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

        {/* Silo Banner Start */}
        <div className="bg-white py-4 md:px-20 px-5 mt-20 w-full h-full flex flex-row justify-between items-center">
          <h3 className="text-3xl font-bold">Know your silo better</h3>
          <img src="./img/Services.png" alt="" className="w-[32rem]" />
        </div>
        {/* Silo Banner End */}

        {/* Dry Matter Start */}
        <div className="md:mx-[110px] mx-[15px] bg-white mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:p-[58px_30px_0] p-[30px_10px_0] flex flex-col gap-8">
          <h3 className="md:text-3xl text-2xl font-bold max-md:p-[0_26px]">
            How much dry matter does your crop provide?
          </h3>
          <div className="flex flex-row flex-wrap w-full md:justify-between justify-start">
            <h5 className="max-md:p-[0_26px] mb-4 md:text-2xl text-base">
              Materials:
            </h5>
            <div className="flex flex-row flex-wrap w-full md:justify-between justify-start">
              <div className="bg-[#25722b] flex flex-col items-center rounded-[2px] md:w-[19%] w-[32.6%] max-md:mb-[5px]">
                <div className="bg-[#43b02a] rounded-full md:w-[93px] md:h-[93px] w-[55px] h-[55px] flex flex-wrap justify-center items-center md:m-[37px_auto_0] m-[17px_auto_0]">
                  <img
                    src="./img/MaterialsInHome/003-microwave.webp"
                    alt="microwave"
                    className="md:w-[41px] md:h-[35px] w-[24px] h-[18px]"
                  />
                </div>
                <span className="md:text-sm text-xs md:py-[20px] md:px-[15px] p-[4px_9px_6px] text-center font-bold text-white">
                  Microwave
                </span>
              </div>
              <div className="bg-[#25722b] flex flex-col items-center rounded-[2px] md:w-[19%] w-[32.6%] max-md:mb-[5px] max-md:ml-[1%]">
                <div className="bg-[#43b02a] rounded-full md:w-[93px] md:h-[93px] w-[55px] h-[55px] flex flex-wrap justify-center items-center md:m-[37px_auto_0] m-[17px_auto_0]">
                  <img
                    src="./img/MaterialsInHome/002-scale.webp"
                    alt="scale"
                    className="md:w-[37px] md:h-[42px] w-[20px] h-[25px]"
                  />
                </div>
                <span className="md:text-sm text-xs md:py-[20px] md:px-[15px] p-[4px_9px_6px] text-center font-bold text-white">
                  Weighing Machine
                </span>
              </div>
              <div className="bg-[#25722b] flex flex-col items-center rounded-[2px] md:w-[19%] w-[32.6%] max-md:mb-[5px] max-md:ml-[1%]">
                <div className="bg-[#43b02a] rounded-full md:w-[93px] md:h-[93px] w-[55px] h-[55px] flex flex-wrap justify-center items-center md:m-[37px_auto_0] m-[17px_auto_0]">
                  <img
                    src="./img/MaterialsInHome/corn.webp"
                    alt="corn"
                    className="md:w-[37px] md:h-[37px] w-[24px] h-[24px]"
                  />
                </div>
                <span className="md:text-sm text-xs md:py-[20px] md:px-[15px] p-[4px_9px_6px] text-center font-bold text-white">
                  5 Corn Plants
                </span>
              </div>
              <div className="bg-[#25722b] flex flex-col items-center rounded-[2px] md:w-[19%] w-[32.6%] max-md:mb-[5px]">
                <div className="bg-[#43b02a] rounded-full md:w-[93px] md:h-[93px] w-[55px] h-[55px] flex flex-wrap justify-center items-center md:m-[37px_auto_0] m-[17px_auto_0]">
                  <img
                    src="./img/MaterialsInHome/001-plate.webp"
                    alt="plate"
                    className="md:w-[39px] md:h-[39px] w-[24px] h-[24px]"
                  />
                </div>
                <span className="md:text-sm text-xs md:py-[20px] md:px-[15px] p-[4px_9px_6px] text-center font-bold text-white">
                  cardboard plate
                </span>
              </div>
              <div className="bg-[#25722b] flex flex-col items-center rounded-[2px] md:w-[19%] w-[32.6%] max-md:mb-[5px] max-md:ml-[1%]">
                <div className="bg-[#43b02a] rounded-full md:w-[93px] md:h-[93px] w-[55px] h-[55px] flex flex-wrap justify-center items-center md:m-[37px_auto_0] m-[17px_auto_0]">
                  <img
                    src="./img/MaterialsInHome/005-water.webp"
                    alt="water"
                    className="md:w-[32px] md:h-[44px] w-[18px] h-[30px]"
                  />
                </div>
                <span className="md:text-sm text-xs md:py-[20px] md:px-[15px] p-[4px_9px_6px] text-center font-bold text-white">
                  Glass of water
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Dry Matter End */}
      </div>
    </>
  );
}

export default Home;
