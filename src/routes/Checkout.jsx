import React from "react";

const Checkout = () => {
  return (
    <>
      <div className=" h-screen w-full flex  bg-white border border-t-gray-300">
        <div className=" w-7/12 border border-r-gray-300 border-t-0 p-5 h-full flex flex-col justify-center ml-40 border-l-0">
          <div className="w-full ">
            <label htmlFor="" className="text-2xl font-semibold block">
              Contact
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 w-full rounded my-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-2xl font-semibold block my-2">
              Delivery
            </label>
            <div>
            <label htmlFor="country" className="text-base block">
              Country/Religion
            </label>
            <select
              name="country"
              id="country"
              className=" border border-gray-300 p-2 w-full rounded my-2"
            >
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="australia">Australia</option>
              <option value="australia">Australia</option>
            </select>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Name"
                className=" mr-2 w-1/2 border border-gray-300 p-2 rounded my-2"
                required
              />
            
              <input
                type="text"
                placeholder="Surname"
                className=" w-1/2  border border-gray-300 p-2 rounded my-2"
                required
              />
            </div>
            <input type="text" placeholder="Company (optional)" className="border border-gray-300 p-2 w-full rounded my-2"/>
            <input type="text" placeholder="Address" className="border border-gray-300 p-2 w-full rounded my-2"/>
            <div className="flex my-2">
              <input type="text" placeholder="Zipcode" className=" w-1/3 border border-gray-300 p-2 rounded"/>
              <input type="text" placeholder="City" className="  w-1/3 border border-gray-300 p-2 rounded ml-2"/>
              <input type="text" placeholder="State" className=" w-1/3 border border-gray-300 p-2 rounded ml-2"/>
            </div>
            <input type="text" placeholder="Phone" className="border border-gray-300 p-2 w-full rounded my-2"/>
            <button className="bg-[#0073cf] text-white p-2 rounded-lg w-full my-2 font-semibold">Review the order</button>
          </div>
        </div>
        <div className=" w-5/12">
          
        </div>
      </div>
    </>
  );
};

export default Checkout;
