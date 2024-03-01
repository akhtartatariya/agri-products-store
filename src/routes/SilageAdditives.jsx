import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// import products from "../db";
import productService from "../firebase/product_service";
import Title from "../components/Title";

//Icons
import { CgClose, CgCloseO } from "react-icons/cg";
import { IoIosArrowDropupCircle } from "react-icons/io";

//Contexts
import { useSearch } from "../components/context/SearchContext";
import { useLoader } from "../components/context/LoaderContext";

//Error Boundary
import ErrorBoundaries from "../components/custom/hooks/ErrorBoundaries";

function SilageAdditives() {
  //States
  const [products, setProducts] = useState([]);
  const { isLoading, setIsLoading } = useLoader();
  const [filter, setFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [usedFor, setUsedFor] = useState(true);
  const [technology, setTechnology] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { searchTerm, updateSearchTerm } = useSearch();
  //Filter States
  const [corn, setCorn] = useState(false);
  const [multiforage, setMultiforage] = useState(false);
  const [grass, setGrass] = useState(false);
  const [pastone, setPastone] = useState(false);
  const [alfalfa, setAlfalfa] = useState(false);
  const [fiberTechnology, setFiberTechnology] = useState(false);
  const [standard, setStandard] = useState(false);
  const [rapidReact, setRapidReact] = useState(false);
  console.log(products);
  //Utility Function
  function toCamelCase(str) {
    // Make the first letter lowercase
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  // Example usage:
  console.log(toCamelCase("FiberTechnology")); // Outputs: fiberTechnology

  //Functions
  const handleUsedFor = () => {
    setUsedFor(!usedFor);
  };
  const handleTechnology = () => {
    setTechnology(!technology);
  };
  const handleClearFilter = () => {
    const filters = {
      corn: false,
      multiforage: false,
      grass: false,
      pastone: false,
      alfalfa: false,
      fiberTechnology: false,
      standard: false,
      rapidReact: false,
    };

    // Reset filter states
    Object.keys(filters).forEach((filter) => {
      // Reset individual filter state
      eval(`set${filter.charAt(0).toUpperCase() + filter.slice(1)}(false)`);
      // Reset checkbox
      const checkbox = document.getElementById(filter);
      if (checkbox) checkbox.checked = false;
    });

    // Reset filteredItems
    setFilteredItems([]);
  };

  // Handle Close Icon Click
  const handleCloseItemClick = (item) => {
    // Remove the item from filteredItems list
    setFilteredItems(
      filteredItems.filter((filteredItem) => filteredItem !== item)
    );

    // Reset the state of the corresponding option to false
    switch (item.toLowerCase()) {
      case "corn":
        setCorn(false);
        break;
      case "multiforage":
        setMultiforage(false);
        break;
      case "grass":
        setGrass(false);
        break;
      case "pastone":
        setPastone(false);
        break;
      case "alfalfa":
        setAlfalfa(false);
        break;
      case "fibertechnology":
        setFiberTechnology(false);
        break;
      case "standard":
        setStandard(false);
        break;
      case "rapidreact":
        setRapidReact(false);
        break;
      default:
        break;
    }

    // Uncheck the checkbox associated with the selected option
    const checkbox = document.getElementById(toCamelCase(item));
    if (checkbox) checkbox.checked = false;
  };

  //UseEffect for setting Items to Filter on checking out the option
  useEffect(() => {
    const selectedOptions = {
      corn,
      multiforage,
      grass,
      pastone,
      alfalfa,
      fiberTechnology,
      standard,
      rapidReact,
    };

    // Check if any filter option is true
    const anyFilterOptionSelected = Object.values(selectedOptions).some(
      (value) => value
    );

    // Update the filter state based on the condition
    setFilter(anyFilterOptionSelected);

    Promise.all(
      Object.keys(selectedOptions).map((itemKey) => {
        const item = selectedOptions[itemKey];
        // Check if item is a boolean value and is true
        if (typeof item === "boolean" && item) {
          const itemName = `${itemKey.charAt(0).toUpperCase()}${itemKey.slice(
            1
          )}`;

          return setFilteredItems((prevItems) => {
            if (!prevItems.includes(itemName)) {
              return [...prevItems, itemName];
            }
            return prevItems;
          });
        }
        return Promise.resolve(); // Resolve promise for non-boolean or false items
      })
    );
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

  //UseEffect For removing Options from FilteredItem List on Unchecking it
  useEffect(() => {
    const selectedOptions = {
      corn,
      multiforage,
      grass,
      pastone,
      alfalfa,
      fiberTechnology,
      standard,
      rapidReact,
    };

    // Check if any filter option is true
    const anyFilterOptionSelected = Object.values(selectedOptions).some(
      (value) => value
    );

    // Update the filter state based on the condition
    setFilter(anyFilterOptionSelected);

    const newFilteredItems = Object.entries(selectedOptions)
      .filter(([_, value]) => value)
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1));

    // Update filteredItems state
    setFilteredItems(newFilteredItems);
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

  const getProducts = () => {
    setIsLoading(true);
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
      const selectedTechnologyOptions = [fiberTechnology, standard, rapidReact];

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
      setIsLoading(false);

      filteredProducts.length === 0 ? setHasError(true) : setHasError(false);
    });
  };

  useEffect(() => {
    try {
      updateSearchTerm('')
      getProducts();
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
        setProducts(product);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(":: error while loading products");
    }
    setFilter(false);
  }, []);

  // search section functionality
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.technology.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.used_for.toLowerCase().includes(searchTerm.toLowerCase())
      ? true
      : false
  );
  const closeSearch = () => {
    updateSearchTerm("");
  };

  console.log(hasError);
  return (
    <div className="min-h-[100vh] ">
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Silage additives
      </div>

      {/* PRODUCTS */}
      <div className={`w-full border-b-4 border-slate-30000 h-60 pt-16 max-sm:pt-6 max-lg:px-10 lg:px-28 max-md:px-4 ${searchTerm && 'hidden'}`}>
        <Title
          text="Products"
          className={"max-md:text-3xl md:text-5xl font-bold "}
        />
        <p className="mt-8 max-sm:mt-4 text-base [font-weight:400] ">
          Choose your products from our catalog and start benefiting from the
          quality of Pioneer inoculants. Make your selection, complete your
          purchase and receive your shipment comfortably at the address you
          indicate within 2-3 days.
        </p>
      </div>

      {/* FILTER SECTION */}
      <section className={`lg:px-28 max-lg:px-10 max-md:px-4 grid lg:grid-cols-[.7fr_2.2fr] max-md:grid-rows-[1fr] py-12 gap-x-8 bg-gray-50`}>
        {/* SORT */}
        <div className={`${searchTerm && 'order-last sm:order-none '}`}>
          {filter && (
            <div className="mb-4">
              <div className="flex flex-row justify-between">
                <h3 className="font-bold text-xl">Filters</h3>
                <span
                  className="flex items-center gap-2 text-[#0073cf] cursor-pointer"
                  onClick={() => handleClearFilter()}
                >
                  <p className="text-sm font-semibold">Clear All</p>
                  <CgCloseO className="text-2xl" />
                </span>
              </div>
              {/* Filter Selected Items */}
              <div>
                {filteredItems.map((item, index) => {
                  return (
                    <div key={index} className="flex justify-between mt-4">
                      <span className="flex gap-2">
                        <p>Used for: </p>
                        <h3 className="font-semibold">{item}</h3>
                      </span>
                      <CgClose
                        className="text-gray-500 cursor-pointer"
                        onClick={() => handleCloseItemClick(item)}
                      />
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
                    onChange={(e) => setCorn(e.target.checked)}
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
                    onChange={(e) => setMultiforage(e.target.checked)}
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
                    onChange={(e) => setGrass(e.target.checked)}
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
                    onChange={(e) => setPastone(e.target.checked)}
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
                    onChange={(e) => setAlfalfa(e.target.checked)}
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
                    id="fiberTechnology"
                    className="size-6 cursor-pointer"
                    onChange={(e) => setFiberTechnology(e.target.checked)}
                  />{" "}
                  <label htmlFor={"fiberTechnology"} className="cursor-pointer">
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
                    onChange={(e) => setStandard(e.target.checked)}
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
                    id="rapidReact"
                    className="size-6 cursor-pointer"
                    onChange={(e) => setRapidReact(e.target.checked)}
                  />{" "}
                  <label htmlFor={"rapidReact"} className="cursor-pointer">
                    Rapid React
                  </label>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* PRODUCT LIST */}
        {isLoading ? (
          <div className="flex justify-center h-screen">
            <div className="animate-spin rounded-full border-t-4 border-[#0073cf] border-solid h-16 w-16"></div>
          </div>
        ) : (
          <ErrorBoundaries hasError={hasError} handleError={getProducts}>
            {!hasError && filteredProducts && (
              <div className={`lg:grid lg:grid-cols-[1fr_1fr_1fr] max-lg:flex max-lg:flex-wrap max-lg:gap-x-4 max-md:justify-center max-lg:mt-8 gap-y-4 mb-10 sm:mb-0`}>
                {filteredProducts && searchTerm && (
                  <div className={`w-full text-center text-lg text-gray-500 font-bold mb-4 block `}>
                    {filteredProducts.length} results found for "{searchTerm}"{" "}
                    <CgCloseO
                      className="cursor-pointer inline-block ml-1 text-xl"
                      onClick={closeSearch}
                    >
                      X
                    </CgCloseO>{" "}
                  </div>
                )}
               
                <ProductCard products={filteredProducts}/>
              </div>
            )}
          </ErrorBoundaries>
        )}
      </section>

      {/* <div className="p-10 flex flex-wrap max-sm:justify-center gap-8">
        <ProductCard products={products} />
      </div> */}
    </div>
  );
}

export default SilageAdditives;
