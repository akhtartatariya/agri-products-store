import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// import products from "../db";
import productService from "../firebase/product_service";
import Title from "../components/Title";

//Icons
import { CgClose, CgCloseO } from "react-icons/cg";
import { IoIosArrowDropupCircle } from "react-icons/io";

function SilageAdditives() {
  // console.log(products.products);

  //States
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [usedFor, setUsedFor] = useState(true);
  const [technology, setTechnology] = useState(true);
  //Filter States
  const [corn, setCorn] = useState(false);
  const [multiforage, setMultiForage] = useState(false);
  const [grass, setGrass] = useState(false);
  const [pastone, setPastone] = useState(false);
  const [alfalfa, setAlfalfa] = useState(false);
  const [fiberTechnology, setFiberTechnology] = useState(false);
  const [standard, setStandard] = useState(false);
  const [rapidReact, setRapidReact] = useState(false);

  //Functions
  const handleUsedFor = () => {
    setUsedFor(!usedFor);
  };
  const handleTechnology = () => {
    setTechnology(!technology);
  };

  // console.log(corn);

  useEffect(() => {
    try {
      productService.getAllProducts().then((products) => {
        let filteredProducts = []; // Start with an empty array

        // Filter products based on selected options
        const selectedUsedForOptions = [
          corn,
          multiforage,
          grass,
          pastone,
          alfalfa,
        ];
        const selectedTechnologyOptions = [
          fiberTechnology,
          standard,
          rapidReact,
        ];

        const selectedUsedForFilters = [
          "Corn",
          "Multiforage",
          "Grass",
          "Pastone",
          "Alfalfa",
        ];
        const selectedTechnologyFilters = [
          "FiberTechnology",
          "Standard",
          "RapidReact",
        ];

        if (
          selectedUsedForOptions.some((option) => option) &&
          selectedTechnologyOptions.some((option) => option)
        ) {
          // If both types of filters are active, filter based on both used_for and technology
          const usedForFilteredProducts = products.filter((item) => {
            return selectedUsedForOptions.some(
              (option, index) =>
                option && item.used_for === selectedUsedForFilters[index]
            );
          });

          filteredProducts = usedForFilteredProducts.filter((item) => {
            return selectedTechnologyOptions.some(
              (option, index) =>
                option && item.technology === selectedTechnologyFilters[index]
            );
          });
        } else if (selectedUsedForOptions.some((option) => option)) {
          // If only used_for filters are active, filter based on used_for only
          filteredProducts = products.filter((item) => {
            return selectedUsedForOptions.some(
              (option, index) =>
                option && item.used_for === selectedUsedForFilters[index]
            );
          });
        } else if (selectedTechnologyOptions.some((option) => option)) {
          // If only technology filters are active, filter based on technology only
          filteredProducts = products.filter((item) => {
            return selectedTechnologyOptions.some(
              (option, index) =>
                option && item.technology === selectedTechnologyFilters[index]
            );
          });
        } else {
          // If no filters are active, set the state to all products
          filteredProducts = products;
        }

        // Set the state to the filtered products
        setProducts(filteredProducts);
      });
    } catch (error) {
      console.log("Error while loading products:", error);
    }
  }, [
    corn,
    multiforage,
    grass,
    pastone,
    alfalfa,
    fiberTechnology,
    standard,
    rapidReact,
  ]);

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
      <section className="px-28 grid grid-cols-[.7fr_2.2fr] py-12 gap-x-8 bg-gray-50">
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
          {/* Used For */}
          <div>
            {/* toggle */}
            <div
              className={`flex justify-between ${
                !usedFor && "mb-4"
              } cursor-pointer`}
              onClick={() => handleUsedFor()}
            >
              <h3 className="font-bold">Used for</h3>
              <IoIosArrowDropupCircle
                className={`text-xl text-[#0073cf] rounded-full duration-300 ${
                  !usedFor && "rotate-180 duration-300"
                }`}
              />
            </div>
            {/* options */}
            {usedFor && (
              <ul className="flex flex-col gap-4 py-4 pl-1 justify-around">
                <li
                  className={`${standard && "hidden"} flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="used_for"
                    id="corn"
                    className="size-6 cursor-pointer"
                    onClick={() => setCorn(!corn)}
                  />{" "}
                  <label htmlFor={"corn"} className="cursor-pointer">
                    Corn
                  </label>
                </li>
                <li
                  className={`${
                    (fiberTechnology || rapidReact) && "hidden"
                  } flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="used_for"
                    id="multiforage"
                    className="size-6 cursor-pointer"
                    onClick={() => setMultiForage(!multiforage)}
                  />{" "}
                  <label htmlFor={"multiforage"} className="cursor-pointer">
                    Multiforage
                  </label>
                </li>
                <li
                  className={`${standard && "hidden"} flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="used_for"
                    id="grass"
                    className="size-6 cursor-pointer"
                    onClick={() => setGrass(!grass)}
                  />{" "}
                  <label htmlFor={"grass"} className="cursor-pointer">
                    Grass
                  </label>
                </li>
                <li
                  className={`${
                    (fiberTechnology || standard) && "hidden"
                  } flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="used_for"
                    id="pastone"
                    className="size-6 cursor-pointer"
                    onClick={() => setPastone(!pastone)}
                  />{" "}
                  <label htmlFor={"pastone"} className="cursor-pointer">
                    Pastone
                  </label>
                </li>
                <li
                  className={`${
                    rapidReact && "hidden"
                  } flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="used_for"
                    id="alfalfa"
                    className="size-6 cursor-pointer"
                    onClick={() => setAlfalfa(!alfalfa)}
                  />{" "}
                  <label htmlFor={"alfalfa"} className="cursor-pointer">
                    Alfalfa
                  </label>
                </li>
              </ul>
            )}
          </div>
          <hr className="bg-slate-400 w-full h-[0.5px]" />
          {/* Technology */}
          <div className="mt-4">
            {/* toggle */}
            <div
              className={`flex justify-between cursor-pointer`}
              onClick={() => handleTechnology()}
            >
              <h3 className="font-bold">Technology</h3>
              <IoIosArrowDropupCircle
                className={`text-xl text-[#0073cf] rounded-full duration-300 ${
                  !technology && "rotate-180 duration-300"
                }`}
              />
            </div>
            {/* options */}
            {technology && (
              <ul className="flex flex-col gap-4 py-4 pl-1 justify-around">
                <li
                  className={`${
                    (multiforage || pastone) && "hidden"
                  } flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="technology"
                    id="fiber"
                    className="size-6 cursor-pointer"
                    onClick={() => setFiberTechnology(!fiberTechnology)}
                  />{" "}
                  <label htmlFor={"fiber"} className="cursor-pointer">
                    Fiber Technology
                  </label>
                </li>
                <li
                  className={`${
                    (corn || grass || pastone) && "hidden"
                  } flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="technology"
                    id="standard"
                    className="size-6 cursor-pointer"
                    onClick={() => setStandard(!standard)}
                  />{" "}
                  <label htmlFor={"standard"} className="cursor-pointer">
                    Standard
                  </label>
                </li>
                <li
                  className={`${
                    (multiforage || alfalfa) && "hidden"
                  } flex items-center gap-2`}
                >
                  <input
                    type="checkbox"
                    name="technology"
                    id="rapid"
                    className="size-6 cursor-pointer"
                    onClick={() => setRapidReact(!rapidReact)}
                  />{" "}
                  <label htmlFor={"rapid"} className="cursor-pointer">
                    Rapid React
                  </label>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* PRODUCT LIST */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-y-4">
          <ProductCard products={products} />
        </div>
      </section>

      {/* <div className="p-10 flex flex-wrap max-sm:justify-center gap-8">
        <ProductCard products={products} />
      </div> */}
    </div>
  );
}

export default SilageAdditives;
