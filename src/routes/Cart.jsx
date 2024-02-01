import React from "react";

import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Icon
import { BsArrowLeft } from "react-icons/bs";
import Button from "../components/FormStuff/Button";
import {
  addToCart,
  clearCart,
  decreaseCartQuantity,
  removeFromCart,
} from "../store/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart)
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartQuantity(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
          <Link to={"/"}>Home</Link> &nbsp;/ Cart
        </div>
        {/* Cart Container */}
        <div className="py-8 px-16">
          <h2 className="font-semibold text-3xl text-center">Shopping Cart</h2>
          {cart.cartItems.length === 0 ? (
            <div className="text-2xl mt-8 text-gray-600 flex flex-col items-center">
              <p>Your cart is currently empty</p>
              <div className="mt-4">
                <Link
                  to={"/silage_additives"}
                  className="text-gray-500 flex items-center"
                >
                  <BsArrowLeft />
                  <span className="ml-2">Start Shopping</span>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="mt-8 mb-4 grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-x-2">
                <h3 className="text-sm font-semibold uppercase pl-2">
                  Product
                </h3>
                <h3 className="text-sm font-semibold uppercase">Price</h3>
                <h3 className="text-sm font-semibold uppercase">Quantity</h3>
                <h3 className="text-sm font-semibold uppercase pr-2 justify-self-end">
                  Total
                </h3>
              </div>
              <div>
                {cart.cartItems?.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 border-t border-t-[rgb(187,187,187)] py-4"
                  >
                    <div className="flex">
                      <img
                        src={cartItem.product_img}
                        alt={cartItem.product_name}
                        className="w-40 max-w-full mr-4 -ml-8"
                      />
                      <div>
                        <h3 className="font-semibold">
                          {cartItem.product_name}
                        </h3>
                        <p className="text-sm">
                          {cartItem.product_desc} <br />{" "}
                          {cartItem.weight[cartItem.id]}
                        </p>
                        <Button
                          children={"remove"}
                          onClick={() => handleRemoveFromCart(cartItem)}
                          className="border-none outline-none mt-3 bg-none text-gray-500 hover:text-black"
                        />
                      </div>
                    </div>
                    <div>€{cartItem.price[cartItem.id]}</div>
                    {/* {console.log(cartItem.price[cartItem.id])} */}
                    <div className="flex items-start justify-center w-32 max-w-full border-[0.5px] border-slate-600 rounded-sm">
                      <Button
                        children={"-"}
                        className="border-none outline-none bg-none py-3 px-6"
                        onClick={() => handleDecreaseCart(cartItem)}
                      />
                      <div className="py-3">{cartItem.cartQuantity}</div>
                      <Button
                        children={"+"}
                        className="border-none outline-none bg-none py-3 px-6"
                        onClick={() => handleIncreaseCart(cartItem)}
                      />
                    </div>
                    <div className="justify-self-end pr-2 font-bold">
                      €
                      {(
                        cartItem.price[cartItem.id] * cartItem.cartQuantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              {/* Cart Summary */}
              <div className="flex justify-between items-start border-t border-slate-500 pt-8">
                <Button
                  children={"Clear Cart"}
                  onClick={() => handleClearCart()}
                  className="bg-none outline-none w-32 max-w-full h-12 font-semibold tracking-wide border-[0.5px] border-slate-400 text-gray-500 rounded-md"
                />
                <div className="w-72 max-w-full">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-bold">€{cart.cartTotalAmount}</span>
                  </div>
                  <p className="text-sm font-light my-2">
                    Taxes and shipping calculated at checkout
                  </p>
                  <Button
                    children={"Checkout"}
                    className="bg-[#0073cf] outline-none w-full h-12 font-semibold tracking-wide border-[0.5px] border-none text-white rounded-md"
                  />
                  <div className="mt-4">
                    <Link
                      to={"/silage_additives"}
                      className="text-gray-500 flex items-center"
                    >
                      <BsArrowLeft />
                      <span className="ml-2">Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
