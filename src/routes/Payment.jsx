import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Payment
      </div>
      <div className="bg-[url('../public/img/hero_pay.webp')] min-h-[310px] mb-[30px] md:pt-[104px] bg-center bg-cover bg-no-repeat"></div>
      <div className="px-[40px] m-[0_auto]">
        <div className="ml-[-30px]">
          <div className="relative md:left-[8.33333%] md:w-[83.33333%] float-left pl-[30px] ">
            <div className="m-[0_0_30px]">
              <h1 className="mt-0 text-[56px] leading-[60px] max-[981px]:text-[40px] max-[981px]:leading-[42px] font-bold m-[20px_0]">
                Payment
              </h1>
            </div>
            <h3 className=" transform-none text-left text-base font-bold">
              Payments
            </h3>
            <p>
              Our online payments are PCI compliant and compatible with 3D
              Secure checks.
            </p>
            <br />
            <h3 className=" transform-none text-left text-base font-bold">
              Payment Methods
            </h3>
            <p>
              Orders can be paid by Visa, Mastercard and American Express credit
              cards. Other payment methods will be added later.
            </p>
            <br />
            <h3 className=" transform-none text-left text-base font-bold">
              Payment Terms
            </h3>
            <p>
              Invoices are paid in accordance with our Terms and Conditions of
              Sale.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
