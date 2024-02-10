import React from "react";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ About us
      </div>
      <div>
        <img
          src="./img/about/aboutus_hero.webp"
          alt="about banner"
          className="h-72 w-full object-cover object-center"
        />
      </div>
    </>
  );
}

export default About;
