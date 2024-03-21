import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fireDB } from "../firebase/config";
const Dashboard = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  useEffect(() => {
    const fetchOrdersCount = async () => {
      const orderCollection = collection(fireDB, "orders");
      const orderSnapshot = await getDocs(orderCollection);
      console.log(orderSnapshot);
      setOrdersCount(orderSnapshot.size);
    };


    const fetchProductsCount = async () => {
      const productsCollection = collection(fireDB, "products");
      const productsSnapshot = await getDocs(productsCollection);
      setProductsCount(productsSnapshot.size);
    };
    const fetchUsersCount = async () => {
      const usersCollection = collection(fireDB, "users");
      const usersSnapshot = await getDocs(usersCollection);
      setUsersCount(usersSnapshot.size);
    };


    fetchOrdersCount();
    fetchProductsCount();
    fetchUsersCount();
  }, []);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Dashboard
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
          Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Orders */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <p className="text-xl font-bold mb-3">Total Orders</p>
            <p className="text-4xl text-blue-500">{ordersCount}</p>
          </div>
          {/* Products */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <p className="text-xl font-bold mb-3">Total Products</p>
            <p className="text-4xl text-green-500">{productsCount}</p>
          </div>
          {/* Users */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <p className="text-xl font-bold mb-3">Total Users</p>
            <p className="text-4xl text-purple-500">{usersCount}</p>
          </div>
        </div>
      </div>


    </>
  );
};

export default Dashboard;
