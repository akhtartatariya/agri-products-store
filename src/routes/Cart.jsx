import React, { useEffect } from "react";

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
  getTotals,
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

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
          <Link to={"/"}>Home</Link> &nbsp;/ Cart
        </div>
        {/* Cart Container */}
        <div className="py-4 px-8 md:py-8 md:px-16 max-md:mt-4">
          <h2 className="font-semibold text-3xl text-center max-md:mb-4">
            Shopping Cart
          </h2>
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
            <div className="max-md:pt-4">
              <hr className="md:hidden bg-slate-500 w-full h-[1px]" />
              <div className="max-md:flex justify-between">
                <div className="mt-8 mb-4 grid items-center max-md:grid-rows-[3fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 max-md:gap-y-4 max-md:hidden">
                  <h3 className="text-sm font-semibold uppercase md:pl-2 max-md:self-start">
                    Product
                  </h3>
                  <h3 className="text-sm font-semibold uppercase">Price</h3>
                  <h3 className="text-sm font-semibold uppercase">Quantity</h3>
                  <h3 className="text-sm font-semibold uppercase pr-2 md:justify-self-end">
                    Total
                  </h3>
                </div>
                <div className="w-full">
                  {cart.cartItems?.map((cartItem) => (
                    <div key={cartItem.id}>
                      <hr className="md:hidden bg-slate-500 w-full h-[1px] mb-2" />
                      <div className="max-md:flex justify-between max-md:sm:gap-x-56">
                        <div className="md:hidden flex">
                          <div className="mt-8 mb-4 grid items-center max-md:grid-rows-[3fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 max-md:gap-y-4">
                            <h3 className="text-sm font-semibold uppercase md:pl-2 max-md:self-start">
                              Product
                            </h3>
                            <h3 className="text-sm font-semibold uppercase">
                              Price
                            </h3>
                            <h3 className="text-sm font-semibold uppercase">
                              Quantity
                            </h3>
                            <h3 className="text-sm font-semibold uppercase pr-2 md:justify-self-end">
                              Total
                            </h3>
                          </div>
                        </div>
                        <div
                          key={cartItem.id}
                          className="grid items-center max-md:grid-rows-[3fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 max-md:gap-y-4 md:border-t md:border-t-[rgb(187,187,187)] py-4"
                        >
                          <div className="flex">
                            <img
                              src={cartItem.product_img}
                              alt={cartItem.product_name}
                              className="w-32 max-md:h-28 md:w-40 max-w-full md:mr-4 md:-ml-8 self-center"
                            />
                            <div className="max-sm:w-32 max-md:text-right">
                              <h3 className="font-semibold max-md:text-md">
                                {cartItem.product_name}
                              </h3>
                              <p className="text-sm">
                                {cartItem.product_desc} <br />{" "}
                                {cartItem.weight[cartItem.id]}
                              </p>
                              <Button
                                children={"remove"}
                                onClick={() => handleRemoveFromCart(cartItem)}
                                className="max-md:text-md border-none outline-none mt-3 bg-none text-gray-500 hover:text-black"
                              />
                            </div>
                          </div>
                          <div className="max-md:flex max-md:justify-end">
                            €{cartItem.price[cartItem.id]}
                          </div>
                          {/* {console.log(cartItem.price[cartItem.id])} */}
                          <div className="max-md:flex max-md:justify-end">
                            <div className="flex items-start justify-center w-32 max-w-full border-[0.5px] border-slate-600 rounded-sm">
                              <Button
                                children={"-"}
                                className="border-none outline-none bg-none py-3 px-6"
                                onClick={() => handleDecreaseCart(cartItem)}
                              />
                              <div className="py-3">
                                {cartItem.cartQuantity}
                              </div>
                              <Button
                                children={"+"}
                                className="border-none outline-none bg-none py-3 px-6"
                                onClick={() => handleIncreaseCart(cartItem)}
                              />
                            </div>
                          </div>
                          <div className="justify-self-end pr-2 font-bold">
                            €
                            {(
                              cartItem.price[cartItem.id] *
                              cartItem.cartQuantity
                            ).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Cart Summary */}
              <div className="flex justify-between items-start border-t border-slate-500 pt-8">
                <Button
                  children={"Clear Cart"}
                  onClick={() => handleClearCart()}
                  className="bg-none outline-none max-sm:w-24 sm:w-32 max-w-full h-12 font-semibold tracking-wide border-[0.5px] border-slate-400 text-gray-500 rounded-md"
                />
                <div className="md:w-72 max-sm:w-48 max-w-full">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-bold">
                      €{cart.cartTotalAmount.toFixed(2)}
                    </span>
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
