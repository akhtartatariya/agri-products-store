import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import productService from "../firebase/product_service";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [total, setTotal] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.userData?.uid);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const placeOrder = async (data) => {
    try {
      const order = {
        contact: { email: data.email, name: data.name, phone: data.phone },
        delivery: {
          country: data.country,
          state: data.state,
          city: data.city,
          company: data.company,
          address: data.address,
          pincode: data.pincode,
        },
        items: cart.cartItems.map((cartItem) => ({
          productId: cartItem.id,
          name: cartItem.product_name,
          price: Number(cartItem.price[cartItem.id]),
          quantity: cartItem.cartQuantity,
          weight: cartItem.weight[cartItem.id],
        })),
        totalAmount: cart.cartTotalAmount,
      };
      const orderPlaced = await productService.orderProduct({
        userId: userId,
        ...order,
      });
      if (orderPlaced) {
        dispatch(clearCart());
        navigate(`/order-history/${userId}`);
        console.log("Order placed successfully!");
        console.log(orderPlaced);

        setTotal(false);
      }
    } catch (error) {
      console.log(":: error while placing order" + error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white border border-t-gray-300">
        <div className="md:w-7/12 p-5 flex flex-col md:ml-52 border border-r-gray-300 border-t-0 border-l-0 order-1 sm:order-none">
          <form onSubmit={handleSubmit(placeOrder)}>
            <div className="w-full">
              <label htmlFor="contact" className="text-2xl font-semibold block">
                Contact
              </label>
              <input
                id="contact"
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full rounded my-2"
                required
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
                required
                {...register("address", { required: true })}
              />
              <div className="flex my-2">
                <input
                  type="number"
                  placeholder="Pincode"
                  className=" w-1/3 border border-gray-300 p-2 rounded"
                  required
                  {...register("pincode", { required: true })}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="  w-1/3 border border-gray-300 p-2 rounded ml-2"
                  required
                  {...register("city", { required: true })}
                />
                <input
                  type="text"
                  placeholder="State"
                  className=" w-1/3 border border-gray-300 p-2 rounded ml-2"
                  required
                  {...register("state", { required: true })}
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-2 w-full rounded my-2"
                required
                {...register("phone", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="bg-[#0073cf] text-white p-2 rounded-lg w-full my-2 font-semibold"
            >
              Review the order
            </button>
          </form>
        </div>
        <div className="md:w-5/12 p-5 bg-gray-100 ">
          {cart.cartItems.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex flex-row items-center w-full border-b-gray-300 p-5"
            >
              <div className="w-1/5 relative md:max-w-16 md:max-h-16 ">
                <img
                  src={cartItem.product_img}
                  alt={cartItem.product_name}
                  className="  rounded border border-gray-300 w-full h-full"
                />
                <span className="absolute top-0 right-0  w-4 h-4 rounded-sm bg-gray-500 text-center text-white text-xs font-semibold leading-4">
                  {cartItem.cartQuantity}
                </span>
              </div>
              <div className="w-2/5 flex flex-col h-full ml-5">
                <p className="text-base font-semibold text-gray-600">
                  {cartItem.product_name}
                </p>
                <p className="text-sm text-gray-500">
                  {cartItem.weight[cartItem.id]}
                </p>
              </div>
              <div className="w-2/5">
                <p className="text-base font-semibold text-gray-600">
                  €{cartItem.price[cartItem.id] * cartItem.cartQuantity}
                </p>
              </div>
            </div>
          ))}

          {/* Total amount  */}
          {total && (
            <div className="flex md:justify-between justify-end mt-5 p-5 w-[70%]">
              <p className="text-lg font-semibold text-gray-600 mr-3">Total</p>
              <p className="text-lg font-semibold text-gray-600">
                €{cart.cartTotalAmount.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
