import React from "react";
import authService from "../firebase/auth_service";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCllck = () => {
    try{

      authService.logout().then(() => {
        dispatch(logout());
        localStorage.clear("user");
        navigate("/login/user");
      });
    }
    catch(error){
      console.log(":: error while logging out user:", error);

  const handleClick = async () => {
    try {
      await authService.logout(); // Wait for logout to complete
      dispatch(logout());
      localStorage.clear("user");
      navigate("/login/user");
    } catch (error) {
      // Handle logout error
      console.error("Error during logout:", error);

    }>
  };
  return (
    <button
      className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
