import React from "react";
import Button from "./FormStuff/Button";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex px-8 w-full bg-white h-20 items-center">
        <div className="w-1/5">
          <img src="../Corteva_logo.png" alt="Corteva logo" className="w-40" />
        </div>
        <div className="w-3/5 h-full">
          <ul className="flex justify-between items-center text-[#0073cf] font-bold text-sm h-full w-full">
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
                className="px-3 py-2 bg-[#0073cf] text-white rounded"
              />

              <Button
                children={"SignUp"}
                className="px-3 py-2 bg-[#0073cf] text-white rounded"
              />
            </li>
          </ul>
        </div>
        <div className="w-1/5 flex text-2xl text-[#0073cf] justify-end gap-8">
          <MdOutlineShoppingCart className="cursor-pointer" />
          <MdOutlineSearch className="cursor-pointer" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
