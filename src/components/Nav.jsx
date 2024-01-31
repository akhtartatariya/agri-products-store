import React, { useEffect, useRef, useState } from "react";
//Components
import Button from "./FormStuff/Button";
import LogoutBtn from "./LogoutBtn";

//FORMS
import LoginForm from "./page-components/LoginForm";
import RegistrationForm from "./page-components/RegistrationForm";

//Animate.css
import "animate.css";

// Icons
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

//React-Router-Dom
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

function Nav() {
  //States
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  //Fetch data From Store
  const userStatus = useSelector((state) => state.auth.status);
  const userName = useSelector((state) => state.auth.userData?.displayName);
  // console.log(userName);
  //Form State
  const [forms, setForms] = useState({
    loginForm: false,
    registrationForm: false,
  });
  const [login, setLogin] = useState(false);
  //Location
  const location = useLocation();

  //References
  let searchRef = useRef();

  //Navigator
  const navigate = useNavigate();

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

  //Form Handle
  //LogIn Form Handle
  const handleShowLoginForm = () => {
    setForms({ ...forms, registrationForm: false, loginForm: true });
  };
  const handleCancelLoginForm = () => {
    setForms({ ...forms, loginForm: false });
  };
  function handleLoginFormValidation() {
    setForms({ ...forms, loginForm: false });
    setLogin(true);
  }
  //Registration Form Handle
  function handleShowRegisterFrom() {
    setForms({ ...forms, loginForm: false, registrationForm: true });
  }
  const handleCancelRegistrationForm = () => {
    setForms({ ...forms, registrationForm: false });
  };

  //Logout Handle
  const logoutHandle = () => {
    setLogin(false);
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

  // console.log(isHomePage); For Debugging

  return (
    <>
      {isHomePage && <div className="md:h-3 w-full bg-[#0073cf]"></div>}
      <nav
        className={` flex px-[2%] w-full bg-white h-20 items-center justify-between gap-8`}
      >
        <div className="w-[10rem] z-30">
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
            {!userStatus ? (
              <li className="flex gap-4">
                <NavLink>
                  <Button
                    children={"Login"}
                    className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
                    onClick={!login ? handleShowLoginForm : undefined}
                  />
                </NavLink>
                <NavLink>
                  <Button
                    children={"SignUp"}
                    className="px-3 py-2 bg-green-800 text-white rounded hover:bg-green-600"
                    onClick={!login ? handleShowRegisterFrom : undefined}
                  />
                </NavLink>
              </li>
            ) : null}
            {userStatus && (
              <li className="flex gap-2 items-center">
                <LogoutBtn logoutHandle={logoutHandle} /> {`(${userName})`}
              </li>
            )}
          </ul>
        </div>
        <div className="w-[10rem] flex text-2xl text-[#0073cf] justify-end gap-3 md:gap-8 z-30">
          <MdOutlineShoppingCart className="cursor-pointer" onClick={"/cart"} />
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
          className={`w-full fixed top-20 z-20 animate__animated animate__fadeInDownBig [--animate-duration:.5s]`}
        >
          <ul
            className={`flex flex-col items-center p-2 gap-4 text-[#0073cf] font-bold text-sm bg-white`}
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
            {!userStatus ? (
              <li className="flex gap-4">
                <Button
                  children={"Login"}
                  className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
                  onClick={!login ? handleShowLoginForm : undefined}
                />

                <Button
                  children={"SignUp"}
                  className="px-3 py-2 bg-green-800 text-white rounded hover:bg-green-600"
                  onClick={!login ? handleShowRegisterFrom : undefined}
                />
              </li>
            ) : null}
            {userStatus && (
              <li className="flex gap-2 items-center">
                <LogoutBtn logoutHandle={logoutHandle} /> {`(${userName})`}
              </li>
            )}
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
              className="animate__animated animate__fadeIn border border-black w-[60%] h-11 rounded outline-none px-4"
              ref={searchRef}
            />
            <MdOutlineSearch
              className="animate__animated animate__fadeIn cursor-pointer text-2xl text-[#0073cf] -ml-16"
              onClick={null}
            />
            <CgCloseO
              className="animate__animated animate__fadeIn cursor-pointer text-2xl text-[#0073cf] "
              onClick={deactiveSearch}
            />
          </div>
        </div>
      )}
      {/* UTILITIES */}
      {/* FORMS */}
      {/* Login Form */}
      {forms.loginForm && (
        <LoginForm
          handleCancel={handleCancelLoginForm}
          showRegister={handleShowRegisterFrom}
          loggedIn={handleLoginFormValidation}
        />
      )}
      {forms.registrationForm && (
        <RegistrationForm
          handleCancel={handleCancelRegistrationForm}
          showLogin={handleShowLoginForm}
        />
      )}
    </>
  );
}

export default Nav;
