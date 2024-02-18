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
  //States
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //dry matter
  const [initialWeight, setInitialWeight] = useState("");
  const [finalWeight, setFinalWeight] = useState("");

  useEffect(() => {
    try {
      productService.getAllProducts().then((products) => {
        setProducts(products);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("Error while loading products:", error);
    }
  }, []);

  const handleInitialValueChange = (e) => {
    setInitialWeight(e.target.value);
  };

  const handleFinalValueChange = (e) => {
    setFinalWeight(e.target.value);
  };

  useEffect(() => {
    const dryPercent = (finalWeight / initialWeight) * 100;

    const calcBlock = document.getElementById("calc");
    const label = document.getElementById("label");
    const percBlock = document.getElementById("drypercent");
    const inoculant = document.getElementById("inoculant");

    // Remove only bg-color classes
    calcBlock.classList.forEach((className) => {
      if (className.startsWith("bg-")) {
        calcBlock.classList.remove(className);
      }
    });
    if (isNaN(dryPercent) || !isFinite(dryPercent)) {
      percBlock.innerText = NaN;
      inoculant.innerText = "";
    } else {
      percBlock.innerText = dryPercent;
    }

    if (dryPercent === 0 || dryPercent > 999) {
      calcBlock.classList.add("bg-[#f8f8f8]");
      label.innerText = "";
      inoculant.innerText = "";
    } else if (dryPercent > 0 && dryPercent < 32) {
      calcBlock.classList.add("bg-[#ff8352]");
      label.innerText =
        "Your silage is too wet! If your weather conditions allow, you should wait for the milk line to reach 2/3 and get the most out of your crop.";
      inoculant.innerText = "Pioneer® 11C33";
    } else if (dryPercent === 32) {
      calcBlock.classList.add("bg-[#00dc78]");
      label.innerText =
        "Your field is at the optimal harvest point. If the weather conditions and the health of the plant allow it, you can wait a few more days to be able to add more starch.";
      inoculant.innerText = "Pioneer® 11C33";
    } else if (dryPercent > 32 && dryPercent < 36) {
      calcBlock.classList.add("bg-[#00b25d]");
      label.innerText =
        "Your field is at the optimal harvest point! Don't wait any longer and get the most out of your crop!";
      inoculant.innerText = "Pioneer® 11C33";
    } else if (dryPercent > 35 && dryPercent < 38) {
      calcBlock.classList.add("bg-[#00dc78]");
      label.innerText =
        "Your field is on the edge of the harvest point, you should pay particular attention to the compaction of the silo to reduce the risk of overheating.";
      inoculant.innerText = "Pioneer® 11A44";
    } else if (dryPercent > 37 && dryPercent < 1000) {
      calcBlock.classList.add("bg-[#ff8352]");
      label.innerText =
        "You must harvest your silage as soon as possible, such high dry matter can lead to stability problems and reduced intake in animals.";
      inoculant.innerText = "Pioneer® 11A44";
    }
  }, [initialWeight, finalWeight]);

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
        {isLoading ? (
          <div className="flex justify-center w-full">
            <div className="animate__animated animate__pulse animate__infinite my-8 text-white text-sm h-11 flex items-center justify-center w-3/4 bg-[#0073cf] shadow-lg border-solid border-2 border-opacity-30 border-gray-600 rounded-lg">
              Loading...
            </div>
          </div>
        ) : (
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
        )}
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
        <div className="xl:mx-[100px] max-xl:md:mx-[40px] max-md:sm:mx-8 mx-4 bg-white mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:p-[58px_30px_0] p-[30px_10px_0] flex flex-col gap-8 mb-[27px]">
          <h3 className="md:text-3xl text-2xl font-bold max-md:p-[0_26px]">
            How much dry matter does your crop provide?
          </h3>
          {/* Materials Start */}
          <div className="flex flex-col gap-8 flex-wrap w-full md:justify-between justify-start">
            <h5 className="max-md:p-[0_26px] md:text-2xl text-base">
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
            <p className="max-md:p-[0_26px] md:text-2xl text-base">
              Weigh 300g of chopped corn, place it together with the ¾ glass of
              water in the microwave for 5 minutes at maximum power, and weigh
              it when finished.
            </p>
            {/* Process Start */}
            <div className="md:p-[40px_94px] p-[11px_20px] m-[0_-10px_18px] bg-[#25722b] flex flex-wrap justify-between rounded-[2px]">
              <div className="w-[15%] relative before:bg-[url('../public/img/MaterialsInHome/plus.png')] before:bg-center before:bg-cover before:bg-no-repeat before:content-[''] before:w-[20px] before:h-[20px] before:block before:absolute before:top-[calc(50%-10px)] before:right-[-30%] before:max-md:max-h-[8px] before:max-md:max-w-[8px]">
                <div className="md:m-[0] m-[17px_auto_0] flex flex-wrap justify-center items-center">
                  <img
                    src="./img/MaterialsInHome/001-plate.webp"
                    alt="Plate"
                    className="max-md:max-h-[27px] max-md:max-w-[28px] max-w-full"
                  />
                </div>
              </div>
              <div className="w-[15%] relative before:bg-[url('../public/img/MaterialsInHome/plus.png')] before:bg-center before:bg-cover before:bg-no-repeat before:content-[''] before:w-[20px] before:h-[20px] before:block before:absolute before:top-[calc(50%-10px)] before:right-[-30%] before:max-md:max-h-[8px] before:max-md:max-w-[8px]">
                <div className="md:m-[0] m-[17px_auto_0] flex flex-col flex-wrap justify-center items-center">
                  <img
                    src="./img/MaterialsInHome/corn.webp"
                    alt="Corn"
                    className="max-md:max-h-[27px] max-md:max-w-[28px] max-w-full"
                  />
                  <span className="p-[10px_0_0] md:text-sm text-xs font-bold text-white text-center">
                    300g
                  </span>
                </div>
              </div>
              <div className="w-[15%] relative before:bg-[url('../public/img/MaterialsInHome/next.png')] before:bg-center before:bg-cover before:bg-no-repeat before:content-[''] before:w-[20px] before:h-[20px] before:block before:absolute before:top-[calc(50%-10px)] before:right-[-30%] before:max-md:max-h-[8px] before:max-md:max-w-[8px]">
                <div className="md:m-[0] m-[17px_auto_0] flex flex-wrap justify-center items-center">
                  <img
                    src="./img/MaterialsInHome/005-water.webp"
                    alt="Water"
                    className="max-md:max-h-[27px] max-md:max-w-[28px] max-w-full"
                  />
                </div>
              </div>
              <div className="w-[15%] relative before:bg-[url('../public/img/MaterialsInHome/next.png')] before:bg-center before:bg-cover before:bg-no-repeat before:content-[''] before:w-[20px] before:h-[20px] before:block before:absolute before:top-[calc(50%-10px)] before:right-[-30%] before:max-md:max-h-[8px] before:max-md:max-w-[8px]">
                <div className="md:m-[0] m-[17px_auto_0] flex flex-col flex-wrap justify-center items-center">
                  <img
                    src="./img/MaterialsInHome/003-microwave.webp"
                    alt="Microwave"
                    className="max-md:max-h-[27px] max-md:max-w-[28px] max-w-full"
                  />
                  <span className="p-[10px_0_0] md:text-sm text-xs font-bold text-white text-center">
                    5min
                  </span>
                </div>
              </div>
              <div className="w-[15%] relative">
                <div className="md:m-[0] m-[17px_auto_0] flex flex-wrap justify-center items-center">
                  <img
                    src="./img/MaterialsInHome/002-scale.webp"
                    alt="Scale"
                    className="max-md:max-h-[27px] max-md:max-w-[28px] max-w-full"
                  />
                </div>
              </div>
            </div>
            {/* Process End */}
            <p className="max-md:p-[0_26px] md:text-2xl text-base mb-8">
              Repeat the process in shorter periods until the weight does not
              change.
            </p>
          </div>
          {/* Materials End */}

          {/* Calculation Dry Start */}
          <div className="flex flex-wrap justify-between relative items-baseline md:p-[37px_50px_0] md:m-[60px_0_0] bg-white m-[40px_0_0] p-[20px_12px_0] before:content-[''] before:w-[calc(100%+60px)] before:[border-top:1px_solid_#dddddd;] before:absolute before:left-[-30px] before:top-0">
            <h3 className="md:text-3xl text-2xl font-bold text-center md:mb-[60px] block w-full md:max-w-none max-w-[266px] m-[0_auto_50px]">
              Enter your details here!
            </h3>
            {/* Inputs Start */}
            <div className="mb-[25px] md:w-[40%] w-full font-medium flex flex-wrap transition-[all_.1s_ease-out]">
              <span className="w-full block mb-[8px]">
                Initial sample weight
              </span>
              <div className="flex flex-wrap items-center w-full">
                <input
                  type="number"
                  value={initialWeight}
                  onChange={(e) => handleInitialValueChange(e)}
                  className="md:w-[53%] md:min-w-[266px] md:max-w-[266px] md:h-[53px] min-[750px]:p-[10px_18px] w-full [border:1px_solid_#c4c9d4] rounded-[2.5px] h-[45px] min-w-[220px] max-w-[220px] bg-white p-[8px_15px]"
                />
                <span className="ml-auto w-auto">grams</span>
              </div>
            </div>
            <div className="mb-[25px] md:w-[40%] w-full font-medium flex flex-wrap transition-[all_.1s_ease-out]">
              <span className="w-full block mb-[8px]">Final sample weight</span>
              <div className="flex flex-wrap items-center w-full">
                <input
                  type="number"
                  value={finalWeight}
                  onChange={(e) => handleFinalValueChange(e)}
                  className="md:w-[53%] md:min-w-[266px] md:max-w-[266px] md:h-[53px] md:p-[10px_18px] w-full [border:1px_solid_#c4c9d4] rounded-[2.5px] h-[45px] min-w-[220px] max-w-[220px] bg-white p-[8px_15px]"
                />
                <span className="ml-auto w-auto">grams</span>
              </div>
            </div>
            {/* Inputs End */}
            {/* Calculation Block Start */}
            <div
              id="calc"
              className="w-full bg-[#f8f8f8] mt-[38px] p-[25px_0_32px] relative font-medium flex flex-wrap transition-[all_.1s_ease-out] md:before:left-[-80px] before:left-[-22px] md:before:w-[80px] before:content-[''] before:w-[22px] before:absolute before:top-0 before:bg-inherit before:block before:z-[2] before:h-full md:after:right-[-80px] after:right-[-22px] md:after:w-[80px] after:content-['']  after:w-[22px] after:absolute after:top-0 after:bg-inherit after:block after:z-[2] after:h-full "
            >
              <div className="md:w-[34%] w-full">
                <span className="w-full block mb-[8px]">% dry matter</span>
                <div className="flex flex-wrap items-center w-full">
                  <textarea
                    id="drypercent"
                    disabled="disabled"
                    className="bg-white min-w-[260px] max-w-[260px] h-[53px] [border:1px_solid_#c4c9d4] rounded-[2.5px] resize-none pt-[16px] min-[750px]:p-[10px_18px] p-[8px_15px] touch-manipulation overflow-auto"
                  ></textarea>
                </div>
              </div>
              <div className="md:w-[66%] md:mt-0 w-full flex flex-wrap mt-[20px] ">
                <div className="w-[65%] pr-[30px]">
                  <span>Label</span>
                  <div
                    id="label"
                    className="font-normal text-sm mt-[10px]"
                  ></div>
                </div>
                <div className="w-[35%] pr-[20px]">
                  <span>Inoculant</span>
                  <div className="font-normal text-sm mt-[10px]">
                    <Link
                      id="inoculant"
                      to={"/silage_additives"}
                      className="text-[#0073cf] font-bold p-[20px] bg-white mt-[16px] block text-center transition-[opacity_.1s_ease-out] rounded-[4px] shadow-[0_6px_34px_#00000014] touch-manipulation"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Calculation Block End */}
          </div>
          {/* Calculation Dry End */}
        </div>
        {/* Dry Matter End */}

        {/* Video Section Start */}
        <div className="xl:mx-[100px] max-xl:md:mx-[40px] max-md:sm:mx-8 mx-4 bg-transparent mt-8 md:p-[58px_30px_0] p-[30px_10px_0] flex flex-col gap-8 mb-[27px]">
          <div className="m-[38px_0_0] p-[0_0_84px]">
            <Link
              className="block p-[0_0_20px_27px] touch-manipulation"
              to={
                "https://www.corteva.es/agronomia-y-servicios/granular-link.html"
              }
              target="_blank"
            >
              <img
                src="./img/MaterialsInHome/granularLink.avif"
                alt="Granular Link"
                className="max-w-full border-0 w-[275px] "
              />
            </Link>
            <span className="md:text-3xl text-2xl md:mb-0 mb-[30px] font-bold relative block pl-[27px] before:content-[''] before:h-[85%] before:w-[5px] before:absolute before:left-0 before:top-[50%] before:bg-[#00dc78] before:[transform:translateY(-50%)]">
              Download our app for free and enjoy the most advanced management
              tools for your farm.
            </span>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ck-CJY2keI0?si=5hX6ZTMcuUyUUKpW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="md:mt-[35px] mt-[31px] md:h-[492px] h-[173px]"
            ></iframe>
            <div className="md:mt-[45px] mt-[25px] flex justify-center items-center flex-wrap gap-x-[30px] gap-y-[20px]">
              <p className="md:text-right text-center md:text-[28px] text-[20px] font-bold m-0 ">
                Download the free app here
              </p>
              <div className="flex items-center gap-x-[25px] ">
                <Link
                  to={
                    "https://play.google.com/store/apps/details?id=com.corteva.glink"
                  }
                  target="_blank"
                  className="md:w-auto w-[120px] flex"
                >
                  <img
                    src="./img/MaterialsInHome/googlePlay.png"
                    alt="Google Play"
                    className="max-w-full w-[172px]"
                  />
                </Link>
                <Link
                  to={
                    "https://apps.apple.com/es/app/granular-link/id1587732677"
                  }
                  target="_blank"
                  className="md:w-auto w-[120px] flex"
                >
                  <img
                    src="./img/MaterialsInHome/appStore.png"
                    alt="App Store"
                    className="max-w-full w-[172px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Video Section End */}
      </div>
    </>
  );
}

export default Home;
