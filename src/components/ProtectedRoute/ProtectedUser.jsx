import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProtectedUser = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  // console.log(authStatus);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      // console.log("working")
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // console.log('second working')
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default ProtectedUser;
