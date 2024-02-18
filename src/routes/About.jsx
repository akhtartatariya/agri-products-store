import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ About us
      </div>
      <div className="relative min-h-[100vh]">
        <img
          src="./img/about/aboutus_hero.webp"
          alt="about banner"
          className=" h-72 w-full object-cover object-center mb-16 md:mb-24 "
        />
        <div className="absolute bottom-32 md:bottom-44 top-32 left-4 md:left-16 right-4 md:right-16 h-56 bg-white opacity-100 shadow-lg grid grid-cols-1 md:grid-cols-2 place-items-center p-8">
          <div className="mb-4 md:mb-0">
            <p className="text-black text-left font-bold md:text-3xl text-lg ">
              A commitment to increasing <div>Progress</div>
            </p>
          </div>
          <div className="text-black text-xs md:text-xl mt-4 md:mt-0 ">
            <p>
              We provide our global presence, deep knowledge and diverse
              resources so farms can thrive and move our world forward.
            </p>
          </div>
          <div className="absolute top-10 md:top-[4.5rem] left-[7%] md:left-[48%] bg-green-400 h-10 md:h-20 w-1 rounded-2xl bottom-1/2 "></div>
        </div>
        <div className="text-left p-4 md:p-16 md:mt-10 mt-20">
          <p className="text-2xl md:text-3xl font-bold">
            Dedicated to agriculture.
          </p>
          <p className="text-lg md:text-xl pt-5">
            Corteva Agriscience™ is the only major agriculture company that is
            completely dedicated to agriculture. By combining the strengths of
            Pioneer and Dow AgroSciences, we have leveraged the brightest minds
            in agriculture and the experience gained over two centuries of
            scientific achievement.
          </p>
          <p className="pt-10 text-xl font-bold">Our purpose </p>
          <p className="pt-4 pb-12 text-base">
            Enrich the lives of those who produce and those who consume,
            ensuring progress for generations to come.
          </p>
        </div>
        <div className="max-sm:mb-12 w-full ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] h-[280px]">
          <img
            className="h-full w-full object-cover"
            src="./img/about/aboutus_Is.webp"
            alt="about banner"
          />
        </div>
        <div className="text-left p-4 md:p-16">
          <p className="md:text-3xl text-2xl font-bold">Our values</p>
          <p className="text-lg md:text-xl pt-5">
            We are guided by our beliefs and our purpose, which is to enrich the
            lives of those who produce and those who consume, ensuring progress
            for generations to come.
          </p>
          <div className="relative pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
            <img
              className="md:col-span-1 h-auto w-full md:w-[310px] object-cover md:my-auto"
              src="./img/about/aboutimg1.webp"
              alt=""
            />
            <div className="md:col-span-3 mt-4 md:mt-0 text-center md:text-left">
              <p className="pt-2 md:pt-5 text-xl md:text-2xl font-bold pb-3">
                Enrich lives
              </p>
              <p className="text-base md:text-lg">
                We are committed to improving life and the earth. As leaders, we
                pursue a purpose that goes beyond our immediate interests to
                benefit society.
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <div className="relative pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <img
              className="md:col-span-1 h-auto w-full md:w-[310px] object-cover md:my-auto"
              src="./img/about/aboutimg2.jpg"
              alt=""
            />
            <div className="md:col-span-3 mt-4 md:mt-0 text-center md:text-left">
              <p className="pt-2 md:pt-5 text-xl md:text-2xl font-bold pb-3 ">
                Stand
              </p>
              <p className="text-base md:text-lg ">
                We are leaders who act boldly. We accept the challenges our
                industry faces, and we will do so to ensure agriculture
                progresses and prospers.
              </p>
            </div>
          </div>
          <hr className="my-5" />

          <div className="relative pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <img
              className="md:col-span-1 h-auto w-full md:w-[310px] object-cover md:my-auto"
              src="./img/about/aboutimg3.jpg"
              alt=""
            />
            <div className="md:col-span-3 mt-4 md:mt-0 text-center md:text-left">
              <p className="pt-2 md:pt-5 text-xl md:text-2xl font-bold pb-3 ">
                Be curious
              </p>
              <p className="text-base md:text-lg">
                We innovate tirelessly. We are accelerating our pace of
                innovation to create solutions that will provide abundant,
                high-quality food, now and for the future.
              </p>
            </div>
          </div>
          <hr className="my-5" />

          <div className="relative pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <img
              className="md:col-span-1 h-auto w-full md:w-[310px] object-cover md:my-auto"
              src="./img/about/aboutimg4.jpg"
              alt=""
            />
            <div className="md:col-span-3 mt-4 md:mt-0 text-center md:text-left">
              <p className="pt-2 md:pt-5 text-xl md:text-2xl font-bold pb-3">
                Build together
              </p>
              <p className="text-base md:text-lg">
                We grow by working together. We embrace diversity and
                collaboration to build a business and reach across the food
                system, creating shared value.
              </p>
            </div>
          </div>
          <hr className="my-5" />

          <div className="relative pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <img
              className="md:col-span-1 h-auto w-full md:w-[310px] object-cover md:my-auto"
              src="./img/about/aboutimg5.jpg"
              alt=""
            />
            <div className="md:col-span-3 mt-4 md:mt-0 text-center md:text-left">
              <p className="pt-2 md:pt-5 text-xl md:text-2xl font-bold pb-3">
                Be outstanding
              </p>
              <p className="text-base md:text-lg">
                We always do the right thing, maintaining high ethical standards
                and conducting business safely and transparently.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 h-12 border-none bg-[#f8f8f8]" />
      </div>
    </>
  );
}

export default About;
