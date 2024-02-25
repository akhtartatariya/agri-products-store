import React from "react";
import authService from "../firebase/auth_service";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      authService.logout().then(() => {
        dispatch(logout());//no need to  Wait for logout to complete
        localStorage.clear("user");
        navigate("/login/user");
      });
    } catch (error) {
      console.log(":: error while logging out user:", error);
    }
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
