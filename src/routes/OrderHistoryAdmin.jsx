import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireDB } from "../firebase/config";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/FormStuff/Button";
import { useLoader } from "../components/context/LoaderContext";

const OrderHistoryAdmin = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  const [orderModal, setOrderModal] = useState(false);

  const [currentOrderId, setCurrentOrderId] = useState("");

  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const orderCollection = collection(fireDB, "orders");
        const orderSnapshot = await getDocs(orderCollection);
        const orders = orderSnapshot.docs.map((doc) => {
          const orderData = doc.data();
          const formattedTimestamp = new Date(
            orderData.timestamp.seconds * 1000
          ).toLocaleString();
          return {
            id: doc.id,
            contact: orderData.contact,
            timestamp: formattedTimestamp,
            totalAmount: orderData.totalAmount.toFixed(2),
            delivery: orderData.delivery,
            item: orderData.items,
            itemName: orderData.items.name,
            // Add other order details as needed
          };
        });
        setOrderHistory(orders);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Order History
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Order Placed At
              </th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr key={order.id}>
                <td
                  onClick={() => {
                    setOrderModal(true);
                    setCurrentOrderId(order.id);
                  }}
                  className="px-4 md:px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-[#0073cf] cursor-pointer underline"
                >
                  {order.id}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                  {order.contact.name}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                  {order.timestamp}
                </td>
                {/* Render other order details */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Detail Modal */}
      {orderModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-15 backdrop-blur-sm z-[100] ">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 md:min-w-96 shadow rounded-lg">
            <div className="">
              <Title
                text="Order Details"
                className={
                  "text-center mb-10 text-[#0073cf] font-bold text-2xl"
                }
              />

              {isLoading ? (
                <div className="flex justify-center items-start">
                  <div className="animate-spin rounded-full border-t-4 border-[#0073cf] border-solid h-16 w-16"></div>
                </div>
              ) : orderHistory.length === 0 ? (
                <p className="text-lg font-semibold text-gray-600 mb-5 text-center md:text-left">
                  No orders found.
                </p>
              ) : (
                orderHistory.map((order) =>
                  order.id === currentOrderId ? (
                    <div
                      key={order.id}
                      className="border-b-gray-300 p-5 mb-5 md:rounded-lg md:shadow-md bg-gray-100 border border-t-gray-300"
                    >
                      <div className="flex flex-col justify-between mb-3 ">
                        <p className="text-lg font-semibold text-sky-600 mb-2 md:mb-0">
                          Order ID: {order.id}
                        </p>
                        <p className="text-lg font-semibold text-gray-600 mb-2 md:mb-0 ">
                          Total Amount: €{order.totalAmount}
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
                        <div
                          key={order.item[0].productId}
                          className="flex flex-col md:flex-row justify-between mb-2 "
                        >
                          <p className="text-base font-semibold text-gray-600 ">
                            {order.item[0].name}
                          </p>
                          <p className="text-base font-semibold text-gray-600 mt-2 md:mt-0 ">
                            Quantity: {order.item[0].quantity} |{" "}
                            {order.item[0].weight} | Total: €
                            {typeof order.item[0].price === "number" &&
                            typeof order.item[0].quantity === "number"
                              ? (
                                  order.item[0].price * order.item[0].quantity
                                ).toFixed(2)
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )
              )}

              <Button
                className={
                  "bg-black text-white px-3 py-1 rounded-md absolute top-5 right-5"
                }
                children="X"
                onClick={() => setOrderModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderHistoryAdmin;
