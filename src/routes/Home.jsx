import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import slides from "../db";

// import products from "../db";
import productService from "../firebase/product_service";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/page-components/ProductCarousel";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      productService.getAllProducts().then((products) => {
        setProducts(products);
        setIsLoading(false);
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
        {/* Products Below Carousel for large screen */}
        <div className="max-md:hidden grid grid-cols-[1fr_1fr] xl:px-[100px] max-xl:md:px-[10px] py-24 w-full">
          {/* Product Category 1 */}
          <div className="flex max-[1140px]:flex-col justify-between max-[1140px]:items-center max-[1140px]:gap-4 border-r-2 max-xl:lg:pr-10 md:pr-4 border-gray-200">
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
          <div className="flex max-[1140px]:flex-col justify-between max-[1140px]:items-center max-[1140px]:gap-4 border-l-2 max-xl:lg:pl-10 md:pl-4 border-gray-200">
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
        {/* Youtube Embbed for large screen */}
        <div className="max-md:hidden">
          <Title
            text="Get the best forage,
thanks to the most advanced technology"
            className="text-3xl font-bold text-center whitespace-pre-line mb-8"
          />
          {/* Youtube card Box Start */}
          <div className="grid grid-cols-2 xl:px-[100px] max-xl:md:px-[40px] pb-12">
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
                <p className="text-sm lg:w-[24rem]">
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
                <p className="text-sm lg:w-[24rem]">
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

        {/* Products below carousel and youtube embbed for smaller screen */}
        <section className="md:hidden">
          <Title
            text="Get the best forage,
thanks to the most advanced technology"
            className="text-2xl font-bold text-center whitespace-pre-line mb-8 mt-16"
          />

          {isLoading ? (
            <div className="flex justify-center w-full">
              <div className="animate__animated animate__pulse animate__infinite my-8 text-white text-sm h-11 flex items-center justify-center w-3/4 bg-[#0073cf] shadow-lg border-solid border-2 border-opacity-30 border-gray-600 rounded-lg">
                Loading...
              </div>
            </div>
          ) : (
            <div>
              {/* Rapid React */}
              <div className="my-16">
                <div className="mb-16">
                  <ProductCarousel
                    products={products.filter(
                      (item) =>
                        item.technology === "RapidReact" &&
                        (item.used_for === "Corn" ||
                          item.used_for === "Grass") &&
                        (item.product_name === "Pioneer® 11C33" ||
                          item.product_name === "Pioneer® 11G22")
                    )}
                  />
                </div>
                {/* Youtube Card */}
                <div className="flex flex-col justify-between  sm:px-8 px-4">
                  <div className="w-full sm:h-[18rem] h-[12rem]">
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
                    <h1 className="text-2xl font-bold text-[#0073cf] mb-6">
                      Pioneer Rapid React
                    </h1>
                    <p className="text-sm">
                      Click here to see our full range of products to improve
                      the stability of your silos.{" "}
                      <Link to={"/silage_additives"}>
                        <span className="text-[#0073cf]">Buy inoculants</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <hr className="sm:mx-8 mx-4 my-8 bg-gray-200 h-[4px]" />
              </div>
              {/* Fiber Technology */}
              <div className="my-16">
                <div className="mb-16">
                  <ProductCarousel
                    products={products.filter(
                      (item) =>
                        item.technology === "FiberTechnology" &&
                        (item.used_for === "Corn" ||
                          item.used_for === "Grass") &&
                        (item.product_name === "Pioneer® 11CFT" ||
                          item.product_name === "Pioneer® 11GFT")
                    )}
                  />
                </div>
                {/* Youtube Card */}
                <div className="flex flex-col justify-between sm:px-8 px-4">
                  <div className="w-full sm:h-[18rem] h-[12rem]">
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
                    <h1 className="text-2xl font-bold text-[#0073cf] mb-6">
                      Pioneer Fiber Technology
                    </h1>
                    <p className="text-sm">
                      Click here to see our full range of products to improve
                      the stability of your silos.{" "}
                      <Link to={"/silage_additives"}>
                        <span className="text-[#0073cf]">Buy inoculants</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <hr className="sm:mx-8 mx-4 my-8 bg-gray-200 h-[4px]" />
            </div>
          )}
        </section>

        {/* Silo Banner Start */}
        <div className="bg-white py-4 xl:px-20 px-5 md:pt-[12px] pt-[24px] max-md:pb-[18px] mt-20 w-full h-full flex flex-row flex-wrap justify-between items-center">
          <h3 className="md:text-3xl text-2xl font-bold max-md:mb-[29px]">
            Know your silo better
          </h3>
          <img src="./img/Services.png" alt="" className="w-[32rem] ml-auto" />
        </div>
        {/* Silo Banner End */}

        {/* Dry Matter Start */}
        <div className="xl:mx-[100px] max-xl:md:mx-[40px] bg-white mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:p-[58px_30px_0] p-[30px_10px_0] flex flex-col gap-8">
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
