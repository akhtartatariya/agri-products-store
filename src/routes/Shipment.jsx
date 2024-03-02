import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

function Shipment() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Shipping
      </div>
      <div className="bg-[url('../public/img/hero_ship.webp')] min-h-[310px] mb-[30px] md:pt-[104px] bg-center bg-cover bg-no-repeat"></div>
      <div className="px-[40px] m-[0_auto]">
        <div className="ml-[-30px]">
          <div className="relative md:left-[8.33333%] md:w-[83.33333%] float-left pl-[30px] ">
            <div className="m-[0_0_30px]">
              <h1 className="mt-0 text-[56px] leading-[60px] max-[981px]:text-[40px] max-[981px]:leading-[42px] font-bold m-[20px_0]">
                Shipment
              </h1>
            </div>
            <h3 className=" transform-none text-left text-base font-bold">
              Shipping costs
            </h3>
            <p>We currently do not charge shipping costs.</p>
            <br />
            <h3 className=" transform-none text-left text-base font-bold">
              Shipping time
            </h3>
            <p>
              We only ship to Spain. Our goal is to deliver all orders within 48
              hours.
            </p>
            <br />
            <h3 className=" transform-none text-left text-base font-bold">
              Cut-off time
            </h3>
            <p>
              If you place your order before 10.30am, your order will leave our
              warehouse on the same day.
            </p>
            <br />
            <h3 className=" transform-none text-left text-base font-bold">
              Logistics partner
            </h3>
            <p>
              We ship your order with our logistics partner. At this time, we
              are unable to provide a tracking number for delivery
              automatically. We are trying to add this information later.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipment;
