import React, { useEffect, useRef, useState } from "react";
//Components
import Button from "./FormStuff/Button";
import LogoutBtn from "./LogoutBtn";

//Animate.css
import "animate.css";

// Icons
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { BiSolidUser } from "react-icons/bi";

//React-Router-Dom
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { useSearch } from "./context/SearchContext";
import authService from "../firebase/auth_service";

function Nav() {
  //States
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const { searchTerm, updateSearchTerm } = useSearch();
  const [isAdmin, setIsAdmin] = useState(false);

  //Fetch data From Store
  const userStatus = useSelector((state) => state.auth.status);
  const userName = useSelector((state) => state.auth.userData?.displayName);
  const userEmail = useSelector((state) => state.auth.userData?.email);
  const userId = useSelector((state) => state.auth.userData?.uid);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  //Location
  const location = useLocation();
  //References
  let searchRef = useRef();
  //Navigator
  const navigate = useNavigate();

  const handleOpenCart = () => {
    navigate("/cart");
  };

  //Functions
  const activeToggle = () => {
    setToggle(true);
  };
  const deactiveToggle = () => {
    setToggle(false);
  };

  const activeSearch = () => {
    setSearch(true);
    navigate("/silage_additives");
  };
  const deactiveSearch = () => {
    setSearch(false);
    updateSearchTerm("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSearchChange = (e) => {
    updateSearchTerm(e.target.value);
  };
  const handleSubmit = () => {
    setSearch(false);
  };

  //Effects
  useEffect(() => {
    if (searchRef.current && search) {
      searchRef.current.focus();
    }
  }, [search]);

  useEffect(() => {
    // Check if it's the home page based on the current URL
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAdminService = await authService.isAdmin();
        console.log(isAdminService);
        setIsAdmin(isAdminService);
      } catch (error) {
        console.log(":: error while fetching data", error.message);
      }
    };
    fetchData();
  }, [navigate]);
  const navItems = [
    {
      name: "DASHBOARD",
      slug: "/admin/dashboard",
      active: isAdmin,
    },
    {
      name: isAdmin ? "ALL PRODUCTS" : "SILAGE ADDITIVES",
      slug: isAdmin ? "/admin/all-products" : "/silage_additives",
      active: true,
    },
    {
      name: "ABOUT US",
      slug: "/about",
      active: !isAdmin,
    },
    {
      name: "FAQs",
      slug: "/faqs",
      active: !isAdmin,
    },
    {
      name: "CONTACT",
      slug: "/contact",
      active: !isAdmin,
    },
    {
      name: "ORDER HISTORY",
      slug: "/order-history/" + userId,
      active: userEmail && userStatus && !isAdmin,
    },
    {
      name: "ADD PRODUCT",
      slug: "/admin/add-product",
      active: isAdmin,
    },
  ];

  return (
    <>
      {isHomePage && <div className="md:h-3 w-full bg-[#0073cf]"></div>}
      <nav
        className={` flex px-[2%] w-full bg-white h-20 items-center justify-between gap-8`}
      >
        <div className="w-[10rem] z-30">
          <Link to={"/"}>
            <img
              src="../Corteva_logo.png"
              alt="Corteva logo"
              className="w-40 cursor-pointer"
            />
          </Link>
        </div>
        <div
          className={`w-full max-w-[45rem] h-full lg:max-w-[60rem] lg:flex lg:items-center hidden`}
        >
          <ul
            className={`flex justify-between items-center text-[#0073cf] font-bold text-sm h-full w-full bg-white`}
          >
            {navItems.map((item) =>
              item.active ? (
                <NavLink
                  to={item.slug}
                  key={item.name}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-[#0073cf]" : "border-transparent"
                    } border-b-4 hover:border-[#0073cf] h-full flex items-center`
                  }
                >
                  {item.name}
                </NavLink>
              ) : null
            )}

            {!userStatus ? (
              <li className="flex gap-4">
                <NavLink to={"/login/user"}>
                  <Button
                    children={"Login"}
                    className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
                  />
                </NavLink>
                <NavLink to={"/signup/user"}>
                  <Button
                    children={"SignUp"}
                    className="px-3 py-2 bg-green-800 text-white rounded hover:bg-green-600"
                  />
                </NavLink>
              </li>
            ) : null}
            {userStatus && (
              <li className="flex gap-2 items-center">
                <LogoutBtn /> {userEmail ? `(${userName})` : null}
              </li>
            )}
          </ul>
        </div>
        <div className="w-[12rem] flex text-2xl text-[#0073cf] justify-end gap-3 md:gap-8 z-30">
          {userStatus && (
            <Link to={`/user-profile/${userName}`}>
              <BiSolidUser className="cursor-pointer" />
            </Link>
          )}
          {!isAdmin ? (
            <div className="relative flex">
              <MdOutlineShoppingCart
                className="cursor-pointer"
                onClick={() => handleOpenCart()}
              />
              <div className="bg-[#0073cf] rounded-full text-white h-4 w-4 text-xs flex justify-center items-center absolute left-4 -top-2">
                {cartTotalQuantity}
              </div>
            </div>
          ) : null}
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
        <div
          className={`w-full fixed top-20 z-20 animate__animated animate__fadeInDownBig [--animate-duration:.5s] lg:hidden`}
        >
          <ul
            className={`flex flex-col items-center p-2 gap-4 text-[#0073cf] font-bold text-sm bg-white`}
          >
            {navItems.map((item) =>
              item.active ? (
                <NavLink
                  onClick={deactiveToggle}
                  to={item.slug}
                  key={item.name}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-[#0073cf]" : "border-transparent"
                    } border-b-4 hover:border-[#0073cf] h-full flex items-center`
                  }
                >
                  {item.name}
                </NavLink>
              ) : null
            )}

            {!userStatus ? (
              <li className="flex gap-4">
                <Button
                  children={"Login"}
                  className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
                />

                <Button
                  children={"SignUp"}
                  className="px-3 py-2 bg-green-800 text-white rounded hover:bg-green-600"
                />
              </li>
            ) : null}
            {userStatus && (
              <li className="flex gap-2 items-center">
                <LogoutBtn /> {`(${userName})`}
              </li>
            )}
          </ul>
        </div>
      )}
      {search && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-35 z-30 ">
          <div
            className={`absolute flex flex-row gap-8 justify-center items-center  p-2 h-20 shadow w-full bg-white`}
          >
            <input
              type="text"
              placeholder="Search"
              className="animate__animated animate__fadeIn border border-black w-[60%] h-11 rounded outline-none px-4"
              ref={searchRef}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <MdOutlineSearch
              className="animate__animated animate__fadeIn cursor-pointer text-2xl text-[#0073cf] -ml-16"
              onClick={handleSubmit}
            />
            <CgCloseO
              className="animate__animated animate__fadeIn cursor-pointer text-2xl text-[#0073cf] "
              onClick={deactiveSearch}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
