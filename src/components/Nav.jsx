import React, { useEffect, useRef, useState } from "react";
//Components
import Button from "./FormStuff/Button";

// Icons
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

import { NavLink } from "react-router-dom";

function Nav() {
  //States
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);

  //References
  let searchRef = useRef();

  //Functions
  const activeToggle = () => {
    setToggle(true);
  };
  const deactiveToggle = () => {
    setToggle(false);
  };

  const activeSearch = () => {
    setSearch(true);
  };
  const deactiveSearch = () => {
    setSearch(false);
  };

  //Effects
  useEffect(() => {
    if (searchRef.current && search) {
      searchRef.current.focus();
    }
  }, [search]);

  return (
    <>
      <nav
        className={` flex px-8 w-full bg-white h-20 items-center justify-between gap-8`}
      >
        <div className="w-[10rem]">
          <img src="../Corteva_logo.png" alt="Corteva logo" className="w-40" />
        </div>
        <div className={`w-[45rem] h-full max-lg:hidden`}>
          <ul
            className={`flex justify-between items-center text-[#0073cf] font-bold text-sm h-full w-full bg-white`}
          >
            <NavLink
              to="/silage_additives"
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              SILAGE ADDITIVES
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              CONTACT
            </NavLink>
            <li className="flex gap-4">
              <Button
                children={"Login"}
                className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
              />

              <Button
                children={"SignUp"}
                className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
              />
            </li>
          </ul>
        </div>
        <div className="w-[10rem] flex text-2xl text-[#0073cf] justify-end gap-8">
          <MdOutlineShoppingCart className="cursor-pointer" />
          <MdOutlineSearch className="cursor-pointer" onClick={activeSearch} />
          {!toggle ? (
            <HiOutlineMenuAlt3
              className="cursor-pointer lg:hidden"
              onClick={activeToggle}
            />
          ) : (
            <CgCloseO
              className="cursor-pointer lg:hidden"
              onClick={deactiveToggle}
            />
          )}
        </div>
      </nav>
      {toggle && (
        <div className={`w-full h-full`}>
          <ul
            className={`flex flex-col items-center p-2 gap-4 ease-in text-[#0073cf] font-bold text-sm h-full w-full bg-white`}
          >
            <NavLink
              to="/silage_additives"
              onClick={deactiveToggle}
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              SILAGE ADDITIVES
            </NavLink>
            <NavLink
              to="/about"
              onClick={deactiveToggle}
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/faqs"
              onClick={deactiveToggle}
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              onClick={deactiveToggle}
              className={({ isActive }) =>
                `${
                  isActive ? "border-[#0073cf]" : "border-transparent"
                } border-b-4 hover:border-[#0073cf] h-full flex items-center`
              }
            >
              CONTACT
            </NavLink>
            <li className="flex gap-4">
              <Button
                children={"Login"}
                className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
              />

              <Button
                children={"SignUp"}
                className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
              />
            </li>
          </ul>
        </div>
      )}
      {search && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-35 backdrop-blur-sm z-30 ">
          <div
            className={`absolute flex flex-row gap-8 justify-center items-center  p-2 h-20 shadow w-full bg-white`}
          >
            <input
              type="text"
              placeholder="Search"
              className="border border-black w-[60%] h-11 rounded outline-none px-4"
              ref={searchRef}
            />
            <MdOutlineSearch
              className="cursor-pointer text-2xl text-[#0073cf] -ml-16"
              onClick={null}
            />
            <CgCloseO
              className="cursor-pointer text-2xl text-[#0073cf] "
              onClick={deactiveSearch}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
