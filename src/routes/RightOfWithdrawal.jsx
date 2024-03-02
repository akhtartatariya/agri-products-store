import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

function RightOfWithdrawal() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Right of withdrawal
      </div>
      <div className="bg-[url('../public/img/hero_return.webp')] min-h-[310px] mb-[30px] md:pt-[104px] bg-center bg-cover bg-no-repeat"></div>
      <div className="px-[40px] m-[0_auto]">
        <div className="ml-[-30px]">
          <div className="relative md:left-[8.33333%] md:w-[83.33333%] float-left pl-[30px] ">
            <div className="m-[0_0_30px]">
              <h1 className="mt-0 text-[56px] leading-[60px] max-[981px]:text-[40px] max-[981px]:leading-[42px] font-bold m-[20px_0]">
                Return
              </h1>
            </div>
            <p className="m-[0_0_19.44444px]">
              Returns that are accepted must be sent to the Corteva warehouse at
              the following address:
            </p>
            <p className="m-[0_0_19.44444px]">
              Varo Logistics Services and Solutions, SL
              <br />
              PI De Begonte, Highway A6 Exit 517
              <br />
              Calle Principal, Nave 11-13
              <br />
              27373 Begonte (Lugo)
            </p>
            <p className="m-[0_0_19.44444px]">
              Referring to the initial order number.
            </p>
            <p className="m-[0_0_19.44444px]">
              You are responsible for the return transportation costs.
            </p>
            <p className="m-[0_0_19.44444px]">
              Corteva recommends that you always use transportation with
              tracking and insurance. We do not guarantee that we will receive
              your return.
            </p>
            <p className="m-[0_0_19.44444px]">
              To be eligible for a return, the item must be unused and in the
              same condition in which you received it. It must also be in the
              original packaging.
            </p>
            <p className="m-[0_0_19.44444px]">
              For returns of defective products, including broken, damaged or
              wrong products, you must contact Customer Service (
              <a
                href="mailto:shop.es@corteva.com"
                target="_blank"
                className="text-[#0073cf] [border-bottom:_1px_solid_currentColor] pb-[1px] touch-manipulation"
              >
                shop.es@corteva.com
              </a>{" "}
              ).
            </p>
            <p className="m-[0_0_19.44444px]">
              You must contact us immediately after receiving the defective
              products.
            </p>
            <p className="m-[0_0_19.44444px]">
              Unfortunately, after 5 business days from the date you receive the
              product, we are unable to offer you a refund or exchange.
            </p>
            <p className="m-[0_0_19.44444px]">
              Please do not return your purchase before completing the steps
              above.
            </p>
            <h3 className=" transform-none text-left text-base font-bold m-[0_0_19.44444px]">
              Refunds (if applicable)
            </h3>
            <p className="m-[0_0_19.44444px]">
              Once your return is received and inspected, we will notify you of
              the approval or rejection of your refund.
            </p>
            <p className="m-[0_0_19.44444px]">
              If approved, your refund will be processed and a credit will
              automatically be applied to your credit card or original payment
              method within a set period of days.
            </p>
            <h3 className=" transform-none text-left text-base font-bold m-[0_0_19.44444px]">
              Late or missing refunds (if applicable)
            </h3>
            <p className="m-[0_0_19.44444px]">
              If you haven't received your refund yet, first check your bank
              account again.
            </p>
            <p className="m-[0_0_19.44444px]">
              Next, contact your credit card company, as it may take some time
              before your refund is officially posted.
            </p>
            <p className="m-[0_0_19.44444px]">
              Next, contact your bank. There is often a processing time before
              the refund is posted.
            </p>
            <p className="m-[0_0_19.44444px]">
              If you have done all of this and still have not received your
              refund, please contact us at{" "}
              <a
                href="mailto:shop.es@corteva.com"
                target="_blank"
                className="text-[#0073cf] [border-bottom:_1px_solid_currentColor] pb-[1px] touch-manipulation"
              >
                shop.es@corteva.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightOfWithdrawal;
