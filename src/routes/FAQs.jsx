import React from "react";

import { Link } from "react-router-dom";

function FAQs() {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Frequently Asked Questions (FAQs)
      </div>
      <div className="max-w-[1100px] px-[40px] m-[0_auto]">
        <div className="ml-[-30px]">
          <div className="relative md:left-[8.33333%] md:w-[83.33333%] float-left pl-[30px] w-full ">
            <div className="bg-[url('../public/img/hero_faq.webp')] min-h-[310px] mb-[30px] md:pt-[104px] bg-center bg-cover bg-no-repeat"></div>
            <div className="m-[0_0_30px]">
              <h1 className="mt-0 text-[56px] font-extrabold m-[20px_0]">
                Frequent questions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
