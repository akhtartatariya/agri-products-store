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
    const fetchData = async () => {
      try {
        const isAdminServ = await authService.isAdmin();
        setIsAdmin(isAdminServ);
        setLoader(false);
      } catch (error) {
        console.error("Error checking admin status:", error);
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loader) {
      if (isAdmin && !authentication && authStatus !== authentication) {
        navigate("/");
      } else if (!isAdmin && authentication && authStatus !== authentication) {
        navigate("/login/admin");
      }
    }
  }, [navigate, authentication, authStatus, isAdmin, loader]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
