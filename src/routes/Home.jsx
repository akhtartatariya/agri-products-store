import React from "react";
import Carousel from "../components/Carousel";
import slides from "../db";

function Home() {
  return (
    <div>
      {/* Carousel For Home Page */}
      <Carousel data={slides} />
    </div>
  );
}

export default Home;
