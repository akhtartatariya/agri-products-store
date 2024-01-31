import React from "react";
import authService from "../firebase/auth_service";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const LogoutBtn = ({ logoutHandle }) => {
  const dispatch = useDispatch();
  const handleCllck = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
    logoutHandle();
  };
  return (
    <button
      className="px-3 py-2 bg-[#0073cf] text-white rounded hover:bg-sky-500"
      onClick={handleCllck}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
