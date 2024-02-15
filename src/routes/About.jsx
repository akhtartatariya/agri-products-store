import React from "react";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ About us
      </div>
      <div class="relative min-h-[100vh]">
        <img
          src="./img/about/aboutus_hero.webp"
          alt="about banner"
          className="h-72 w-full object-cover object-center"
        />
        <div className="absolute bottom-44 top-32 left-64 right-64 h-56 bg-white opacity-100 shadow-lg grid grid-cols-2 place-items-center ">
          <div className=" ">
            <div className="pl-16 w-full">
              <p className="text-black text-left font-bold text-3xl  ">
                A commitment to increasing Progress
              </p>
            </div>
          </div>
          <div className=" ">
            <div className=" w-full pl-8 pr-16">
              <p className="text-black text-base" >
                We provide our global presence, deep knowledge and diverse resources so farms can thrive and move our world forward.
              </p>
            </div>
          </div>
          <div className="absolute top-20 bottom-10 left-1/2 bg-green-400 h-20 w-1 rounded-2xl "></div>
        </div>
        <div className="text-left pl-64 pr-64 pt-40">
          <p className="text-3xl font-bold">Dedicated to agriculture.</p>
          <p className="text-xl pt-5">Corteva Agriscience™ is the only major agriculture company that is completely dedicated to agriculture. By combining the strengths of Pioneer and Dow AgroSciences, we have leveraged the brightest minds in agriculture and the experience gained over two centuries of scientific achievement.</p>
          <p className="pt-10 text-xl font-bold">Our purpose </p>
          <p className="pt-4 pb-24 text-base">Enrich the lives of those who produce and those who consume, ensuring progress for generations to come.</p>
        </div>
        <div className=" pb-28 w-full"> <img className=" h-[280px] w-full object-cover" src="./img/about/aboutus_Is.webp" alt="about banner" /></div>
        <div className="text-left pl-64 pr-64">
          <p className="text-3xl font-bold">Our values</p>
          <p className="text-xl pt-5">We are guided by our beliefs and our purpose, which is to enrich the lives of those who produce and those who consume, ensuring progress for generations to come.</p>
          <div className="relative pt-16 grid grid-cols-4 ">
            <img className="col-span-1 h-auto w-[310px] pb-14 object-cover" src="./img/about/aboutimg1.webp" alt="" />
          <div className="col-span-3  ml-10">
            <p className="pt-5 text-2xl font-bold pb-3 ">Enrich lives</p>
            <p className="text-base">We are committed to improving life and the earth. As leaders, we pursue a purpose that goes beyond our immediate interests to benefit society.</p>
            </div>
          </div>
          <hr className=" border-b-5 border-gray-400"/>

          <div className="relative pt-16 grid grid-cols-4 ">
            <img className="col-span-1 h-auto w-[310px] pb-14 object-cover" src="./img/about/aboutimg2.jpg" alt="" />
          <div className="col-span-3  ml-10">
            <p className="pt-5 text-2xl font-bold pb-3 ">Stand</p>
            <p className="text-base">We are leaders who act boldly. We accept the challenges our industry faces and we will do so to ensure agriculture progresses and prospers.</p>
            </div>
          </div>

          <hr className=" border-b-5 border-gray-400"/>


          <div className="relative pt-16 grid grid-cols-4 ">
            <img className="col-span-1 h-auto w-[310px] pb-14 object-cover" src="./img/about/aboutimg3.jpg" alt="" />
          <div className="col-span-3  ml-10">
            <p className="pt-5 text-2xl font-bold pb-3 ">Be curious</p>
            <p className="text-base">We innovate tirelessly. We are accelerating our pace of innovation to create solutions that will provide abundant, high-quality food, now and for the future.</p>
            </div>
          </div>

          <hr className=" border-b-5 border-gray-400"/>


          <div className="relative pt-16 grid grid-cols-4 ">
            <img className="col-span-1 h-auto w-[310px] pb-14 object-cover" src="./img/about/aboutimg4.jpg" alt="" />
          <div className="col-span-3  ml-10">
            <p className="pt-5 text-2xl font-bold pb-3 ">Build together</p>
            <p className="text-base">We grow by working together. We embrace diversity and collaboration to build a business and reach across the food system, creating shared value.</p>
            </div>
          </div>

          <hr className=" border-b-5 border-gray-400"/>


          <div className="relative pt-16 grid grid-cols-4 ">
            <img className="col-span-1 h-auto w-[310px] pb-24 object-cover" src="./img/about/aboutimg5.jpg" alt="" />
          <div className="col-span-3  ml-10">
            <p className="pt-5 text-2xl font-bold pb-3 ">Be outstanding</p>
            <p className="text-base">We always do the right thing, maintaining high ethical standards and conducting business safely and transparently.</p>
            </div>
          </div>

        </div>
        <hr class="border-t-2 h-12 border-none bg-[#f8f8f8]" />
        

      </div>
    </>
  );
}

export default About;
