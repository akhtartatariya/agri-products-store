import React from "react";
import Carousel from "../components/Carousel";
import slides from "../db";

function Home() {
  
  return (
    <div>
      {/* Carousel For Home Page */}
      <Carousel
        data={slides.slides}
        text={"Produce Tasty Silages and avoid reheating"}
      />
      
    </div>
  );
}

export default Home;
