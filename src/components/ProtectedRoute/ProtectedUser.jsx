import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedUser = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is still mounted

    const handleNavigation = () => {
      if (authentication && authStatus !== authentication) {
        navigate("/login/user");
      } else if (!authentication && authStatus !== authentication) {
        navigate("/");
      }

      setLoader(false);
    };

    if (isMounted) {
      // Check authentication only after the component has mounted
      handleNavigation();
    }

    // Cleanup function to update isMounted when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [authStatus, navigate, authentication]);

  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      {loader ? null : children}
    </React.Suspense>
  );
};

export default ProtectedUser;
