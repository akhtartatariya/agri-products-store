import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="text-white text-sm font-bold">
        {/* Footer Upper */}
        <div className="px-[13%] bg-[#262626] flex gap-[12%] items-center h-[8rem]">
          <img
            src="../Corteva_Footer_Logo.png"
            alt="Corteva Footer Logo"
            className="w-52 h-10"
          />
          <ul className="flex w-full gap-[8%]">
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
        <div className="px-[13%] flex flex-col justify-center gap-[15%] bg-[#1f1f1f] h-[14rem]">
          <div>
            <ul className="flex justify-start gap-[5%]">
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
              <li>
                <Link>Cookie preferences</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs">
              Corteva Agriscience Germany GmbH, Riedenburger Str. 7, 81677
              Munich, Germany <br />
              ™ ® Trademarked by Corteva Agriscience and affiliates. <br />
              © 2023 Corteva. <br />
              ® 1 Reg. Brand of the manufacturer. <br />
              Use pesticides carefully. Before use always read the label and the
              product information. Pay attention to warning notices and symbols.
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
