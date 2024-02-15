import React from "react";
import cartSlice from "../store/cartSlice";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { register, handleSubmit } = useForm();

  console.log(cart);
  const placeOrder = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-white border border-t-gray-300">
        <div className="md:w-7/12 border border-r-gray-300 border-t-0 p-5 flex flex-col ml-0 md:ml-52 border-l-0 h-[10rem]">
          <form onSubmit={handleSubmit(placeOrder)}>
            <div className="w-full ">
              <label htmlFor="contact" className="text-2xl font-semibold block">
                Contact
              </label>
              <input
                id="contact"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full rounded my-2"
                {...register("email", { required: true })}
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
                  {...register("country", { required: true })}
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
                  {...register("name", { required: true })}
                />

                <input
                  type="text"
                  placeholder="Surname"
                  className=" w-1/2  border border-gray-300 p-2 rounded my-2"
                  required
                  {...register("surname", { required: true })}
                />
              </div>
              <input
                type="text"
                placeholder="Company (optional)"
                className="border border-gray-300 p-2 w-full rounded my-2"
                {...register("company", { required: false })}
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-2 w-full rounded my-2"
                {...register("address", { required: true })}
              />
              <div className="flex my-2">
                <input
                  type="number"
                  placeholder="Pincode"
                  className=" w-1/3 border border-gray-300 p-2 rounded"
                  {...register("pincode", { required: true })}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="  w-1/3 border border-gray-300 p-2 rounded ml-2"
                  {...register("city", { required: true })}
                />
                <input
                  type="text"
                  placeholder="State"
                  className=" w-1/3 border border-gray-300 p-2 rounded ml-2"
                  {...register("state", { required: true })}
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-2 w-full rounded my-2"
                {...register("phone", { required: true })}
              />
              <button
                type="submit"
                className="bg-[#0073cf] text-white p-2 rounded-lg w-full my-2 font-semibold"
              >
                Review the order
              </button>
            </div>
          </form>
        </div>
        <div className=" md:w-5/12 bg-gray-100 p-5">
          {cart.cartItems.map((cartItem) => (
            <div
              className="w-full flex flex-row border-b-gray-300 p-5 "
              key={cartItem.id}
            >
              <div className=" flex justify-center items-center image w-1/5 rounded border border-gray-300 max-w-16 max-h-16 relative">
                <img src={cartItem.product_img} alt={cartItem.product_name} />
                <span className="absolute top-0 right-0 w-4 h-4 rounded-sm bg-gray-500 text-center text-white text-xs font-semibold leading-4 ">
                  {cartItem.cartQuantity}
                </span>
              </div>
              <div className="w-2/5 flex flex-col h-full ml-5 ">
                <div>
                  <p className=" text-base font-semibold text-gray-600 ">
                    {cartItem.product_name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500  ">
                    {cartItem.weight[cartItem.id]}
                  </p>
                </div>
              </div>
              <div className="w-2/5">
                <p className="text-base font-semibold text-gray-600 ">
                  €{cartItem.price[cartItem.id] * cartItem.cartQuantity}
                </p>
              </div>
            </div>
          ))}

          {/* Total amount  */}

          <div className="flex justify-between mt-5 p-5 w-[70%]">
            <p className=" text-lg font-semibold text-gray-600 "> Total </p>
            <p className=" text-lg font-semibold text-gray-600 ">
              €{cart.cartTotalAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
