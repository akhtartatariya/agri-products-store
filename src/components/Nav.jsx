import React, { useState } from "react";
import Button from "./FormStuff/Button";

// Icons
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [toggle, setToggle] = useState(false);

  const activeToggle = () => {
    setToggle(true);
  };

  const deactiveToggle = () => {
    setToggle(false);
  };
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
          <MdOutlineSearch className="cursor-pointer" />
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
    </>
  );
}

export default Nav;
