import React from "react";

import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ About us
      </div>
      <div>
       <img src="./img/about/aboutbanner.jpg" alt="about banner" className="h-72 w-full object-cover object-bottom"/>
       <div className="absolute inset-x-1/3 inset-y-1/4 bg-white opacity-100 max-h-40  top-150 bottom-2/10 left-10 right-10"></div>
      </div>
     
    </>
  );
}

export default About;


