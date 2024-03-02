import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../firebase/product_service";
import { useSelector } from "react-redux";
import { useLoader } from "../components/context/LoaderContext";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector((state) => state.auth.userData?.uid);
  const { isLoading, setIsLoading } = useLoader();
  useEffect(() => {
    setIsLoading(true);
    productService.getOrders(userId).then((products) => {
      console.log(products);
      setOrders(products);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Order History
      </div>

      <div className="min-h-screen flex flex-col md:flex-row bg-white border border-t-gray-300">
        <div className="md:w-7/12 p-5 flex flex-col md:ml-5 md:mr-5 md:border-r-gray-300 md:border-t-0 md:border-l-0">
          <h1 className="text-3xl font-semibold mb-5">Order History</h1>

          {isLoading ? (
            <div className="flex justify-center items-start h-screen">
              <div className="animate-spin rounded-full border-t-4 border-[#0073cf] border-solid h-16 w-16"></div>
            </div>
          ) : orders.length === 0 ? (
            <p className="text-lg font-semibold text-gray-600 mb-5 text-center md:text-left">
              No orders found.
            </p>
          ) : (
            orders.map((order) =>
              order.userId === userId ? (
                <div
                  key={order.id}
                  className="border-b-gray-300 p-5 mb-5 md:rounded-lg md:shadow-md bg-gray-100 border border-t-gray-300"
                >
                  <div className="flex flex-col md:flex-row justify-between mb-3 ">
                    <p className="text-lg font-semibold text-sky-600 mb-2 md:mb-0">
                      Order ID: {order.id}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-2 md:mb-0 ">
                      Total Amount: €{order.totalAmount.toFixed(2)}
                    </p>
                  </div>
                  <div className="mb-3 ">
                    <p className="text-base font-semibold text-gray-600">
                      Contact: {order.contact.name} ({order.contact.email},{" "}
                      {order.contact.phone})
                    </p>
                  </div>
                  <div className="mb-3 ">
                    <p className="text-base font-semibold text-gray-600 ">
                      Delivery Address: {order.delivery.address},{" "}
                      {order.delivery.city}, {order.delivery.state},{" "}
                      {order.delivery.country}, {order.delivery.pincode}
                    </p>
                  </div>
                  <div>
                    {order.items.map((item) => (
                      <div
                        key={item.productId}
                        className="flex flex-col md:flex-row justify-between mb-2 "
                      >
                        <p className="text-base font-semibold text-gray-600 ">
                          {item.name}
                        </p>
                        <p className="text-base font-semibold text-gray-600 mt-2 md:mt-0 ">
                          Quantity: {item.quantity} | Total: €
                          {typeof item.price === "number" &&
                          typeof item.quantity === "number"
                            ? (item.price * item.quantity).toFixed(2)
                            : "N/A"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
