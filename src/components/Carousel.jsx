import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Button from "./FormStuff/Button";

function Carousel({ data, text }) {
  //   console.log(data);

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
    <div className="flex justify-center items-center w-full h-[400px] relative">
      <BsArrowLeftCircleFill
        className="absolute w-8 h-8 text-white left-4 hover:cursor-pointer drop-shadow z-10"
        onClick={prevSlide}
      />
      {data.map((item) => {
        return (
          <>
            <img
              src={item.src}
              alt={item.alt}
              key={item.id}
              className={
                slide === item.id
                  ? "w-full h-full object-cover brightness-75"
                  : "hidden"
              }
            />
            {text && (
              <div className="absolute w-3/12 left-24 bottom-16" key={item.id}>
                <span className="text-white text-3xl font-bold" key={item.id}>
                  Produce tasty silages and avoid reheating
                </span>
                <Button
                  key={item.id}
                  type={"button"}
                  children={"BUY FREE"}
                  className="text-white text-xl font-bold px-4 py-4 bg-green-800 mt-8 rounded hover:bg-green-600 "
                />
              </div>
            )}
          </>
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
