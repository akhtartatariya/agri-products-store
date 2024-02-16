import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Button from "./FormStuff/Button";

function Carousel({ data, text }) {

  const [slide, setSlide] = useState(1);

  const nextSlide = () => {
    setSlide(slide === data.length ? 1 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 1 ? data.length : slide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide(); // Invoke the function
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slide, data.length]); // Include slide and data.length in the dependency array

  return (
    <div className="flex justify-center items-center w-full h-[35rem] md:h-[28rem] relative">
      <BsArrowLeftCircleFill
        className="absolute w-8 h-8 text-white left-4 hover:cursor-pointer drop-shadow z-10"
        onClick={prevSlide}
      />
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              className={
                slide === item.id
                  ? "w-full h-full object-cover brightness-75"
                  : "hidden"
              }
            />
            {text && (
              <div
                className="absolute w-80 sm:left-24 max-sm:left-[12%] bottom-16 flex flex-col"
                key={item.id + "-text"}
              >
                <span className="text-white text-lg md:text-3xl font-bold">
                  Produce tasty silages <br /> and avoid reheating
                </span>
                <Button
                  type={"button"}
                  children={"BUY FREE"}
                  className="text-white w-32 text-lg md:w-40 md:text-2xl font-bold px-4 py-4 bg-green-800 mt-8 rounded hover:bg-green-600 "
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
      <BsArrowRightCircleFill
        className="absolute w-8 h-8 text-white right-4 hover:cursor-pointer drop-shadow z-10"
        onClick={nextSlide}
      />
      <span className="flex absolute bottom-4">
        {data.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setSlide(item.id)}
              className={
                slide === item.id
                  ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow mx-1 cursor-pointer"
                  : "h-2 w-2 rounded-full border-none outline-none shadow mx-1 cursor-pointer bg-gray-400"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
