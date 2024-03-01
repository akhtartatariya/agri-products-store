import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <section class="mb-12 bg-gray-100 h-full p-6">
        <div class="text-center">
          <h2 class="m-[40px_0] max-md:text-[2rem] text-[2.5rem]">
            Oops! Error 404, Page not found
          </h2>
          <div>
            <img
              src="/img/error404.svg"
              alt="404"
              class="w-[300px] max-w-[75%] mx-auto"
            />
          </div>
          <h4 class="m-[40px_0_20px] max-md:text-[1rem] text-[1.2rem] max-md:mb-6 mb-12">
            We can't find the page you are looking for
          </h4>
          <Link
            class="p-3 bg-[#0072CE] text-white rounded font-semibold border-none"
            to="/"
          >
            Go Back To Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default Error404;
