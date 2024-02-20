import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Outlet />
      <h1 className=" text-3xl font-bold text-[#0073cf] mb-5 py-3 text-center ">
         Admin {" "}
      </h1>
    </>
  );
};

export default Admin;
