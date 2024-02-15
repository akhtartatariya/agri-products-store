import React from "react";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.email === "sanaya@gmail.com" || admin.email==='a@gmail.com') {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default Protected;
