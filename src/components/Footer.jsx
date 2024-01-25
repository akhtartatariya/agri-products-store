import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="text-white text-sm font-bold">
        {/* Footer Upper */}
        <div className="px-[15%] md:px-[13%] bg-[#262626] flex flex-col md:flex-row gap-[12%] justify-center md:items-center h-[14rem] md:h-[8rem]">
          <img
            src="../Corteva_Footer_Logo.png"
            alt="Corteva Footer Logo"
            className="w-52 h-10 max-md:-ml-[3.2rem]"
          />
          <ul className="flex flex-col md:flex-row w-full gap-[.5rem] md:gap-[8%]">
            <li>
              <Link>Payment</Link>
            </li>
            <li>
              <Link>Shipment</Link>
            </li>
            <li>
              <Link>Right of withdrawal</Link>
            </li>
            <li>
              <Link>Corteva</Link>
            </li>
          </ul>
        </div>
        {/* Footer Lower */}
        <div className="px-[15%] md:px-[13%] flex flex-col justify-center gap-[15%] bg-[#1f1f1f] h-[35rem] md:h-[14rem]">
          <div>
            <ul className="flex flex-col md:flex-row justify-start gap-[.5rem] md:gap-[5%]">
              <li>
                <Link>Data protection</Link>
              </li>
              <li>
                <Link>Legal Notice</Link>
              </li>
              <li>
                <Link>Conditions</Link>
              </li>
              <li>
                <Link>imprint</Link>
              </li>
              <li>
                <Link>Data protection request</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row max-md:gap-8 max-md:-mt-8">
            <div className="text-xs">
              Corteva Agriscience Germany GmbH, Riedenburger Str. 7, 81677
              Munich, Germany <br />
              ™ ® Trademarked by Corteva Agriscience and affiliates. <br />
              © 2023 Corteva. <br />
              ® 1 Reg. Brand of the manufacturer. <br />
              Use pesticides carefully. Before use always read the label and the
              product information. Pay attention to warning notices and symbols.
            </div>
            <div className="flex gap-2">
              <div className="bg-white w-10 h-6 flex items-center justify-center">
                <img
                  src="../img/footer/Visa_icon.png"
                  alt="Visa Icon"
                  className="w-7"
                />
              </div>
              <div className="bg-white w-10 h-6 flex items-center justify-center">
                <img
                  src="../img/footer/Mastercard_icon.png"
                  alt="Mastercard icon"
                  className="w-7"
                />
              </div>
              <div className="bg-transparent w-[2.9rem] h-6 flex items-center justify-center">
                <img
                  src="../img/footer/Amex_icon.png"
                  alt="Amex icon"
                  className="w-[2.9rem] -ml-[.6rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
