import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../firebase/auth_service";
const Protected = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const checkAdmin = async () => {
      const isAdminServ = await authService.isAdmin();
      setIsAdmin(isAdminServ);
    };

    if (isAdmin && authentication && authStatus !== authentication) {
      navigate("/login/admin");
    } else if (isAdmin && !authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoader(false);
    checkAdmin();
  }, [navigate, authentication, authStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
