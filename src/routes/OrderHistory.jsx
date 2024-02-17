import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../firebase/product_service";
import { useSelector } from "react-redux";
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector((state) => state.auth.userData?.uid)
  useEffect(() => {
    productService.getOrders().then((products) => {
      console.log(products);
      setOrders(products);
    });
  }, []);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Order History
      </div>

      <div className="min-h-screen flex flex-col md:flex-row bg-white border border-t-gray-300">
        <div className="md:w-7/12 p-5 flex flex-col md:ml-52 border border-r-gray-300 border-t-0 border-l-0">
          <h1 className="text-3xl font-semibold mb-5">Order History</h1>

          {orders.map((order) => order.userId===userId ?(
            <div key={order.id} className="border-b-gray-300 p-5 mb-5">
              {/* Display other order details and items here */}
              <div className="flex justify-between mb-3">
                <p className="text-lg font-semibold text-gray-600">
                  Order ID: {order.id}
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Total Amount: €{order.totalAmount.toFixed(2)}
                </p>
              </div>
              <div className="mb-3">
                <p className="text-base font-semibold text-gray-600">
                  Contact: {order.contact.name} ({order.contact.email},{" "}
                  {order.contact.phone})
                </p>
              </div>
              <div className="mb-3">
                <p className="text-base font-semibold text-gray-600" >
                  Delivery Address: {order.delivery.address},{" "}
                  {order.delivery.city}, {order.delivery.state},{" "}
                  {order.delivery.country}, {order.delivery.pincode}
                </p>
              </div>
              <div>
                {/* Display individual items in the order */}
                {order.items.map((item) => (
                  <div key={item.productId} className="flex justify-between">
                    <p className="text-base font-semibold text-gray-600">
                      {item.name}
                    </p>
                    <p className="text-base font-semibold text-gray-600">
                      Quantity: {item.quantity} | Price: €
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ):null)}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
