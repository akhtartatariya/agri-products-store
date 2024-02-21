import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Protected = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const admin = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const adminEmail =
    admin.email === "sanaya@gmail.com" || admin.email === "a@gmail.com";

  useEffect(() => {
    if (adminEmail && authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (adminEmail && !authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [navigate, authentication, authStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
