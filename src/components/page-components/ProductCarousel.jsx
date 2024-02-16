import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ProductCarousel = ({ products }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="mx-auto" style={{ maxWidth: "15rem" }}>
              <ProductCard products={[product]} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow custom-prev absolute top-1/2 sm:left-8 left-4 transform -translate-y-1/2 z-[1]"
      onClick={onClick}
    >
      <BsArrowLeft className="text-[#0073cf] text-5xl p-2 bg-white shadow-lg cursor-pointer" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow custom-next absolute top-1/2 sm:right-8 right-4 transform -translate-y-1/2"
      onClick={onClick}
    >
      <BsArrowRight className="text-[#0073cf] text-5xl p-2 bg-white shadow-lg cursor-pointer" />
    </div>
  );
};

export default ProductCarousel;
