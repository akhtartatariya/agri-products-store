import React from "react";

function ProductCard() {
  return (
    <>
      <div className="w-[15rem] h-[28rem] shadow-xl relative text-xs flex flex-col justify-between [margin:0_auto]">
        <div className="py-2 px-3 flex flex-col gap-6">
          <div className="flex justify-center">
            <img
              src="../img/products/11C33.webp"
              alt="11C33"
              className="w-44"
            />
          </div>
          <div>
            <h2 className="font-bold text-2xl">SILA-BAC® Corn Combi RR</h2>
            <p className="text-sm text-gray-600 mt-1">
              Less reheating in corn silages.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <hr className="h-[0.02rem] bg-gray-600 w-full" />
            <div className="flex justify-between font-bold">
              <span>List Price</span>
              <span>$83.10</span>
            </div>
            <p className="text-gray-600">VAT included.</p>
          </div>
          <div>
            <select
              name="weight"
              id="weight"
              className="w-full outline-none border border-black p-2 rounded-sm"
            >
              <option selected value="50">
                50g
              </option>
              <option value="250">250g</option>
            </select>
          </div>
          <img
            src="../img/Pioneer_Logo.jpg"
            alt="Pioneer Logo"
            className="w-11 absolute top-4 left-2"
          />
        </div>
        <div className="bg-green-800 text-white font-bold h-9 flex items-center justify-center">
          <h2>ADD TO CART</h2>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
