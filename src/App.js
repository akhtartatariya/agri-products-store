import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { login, logout } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "./firebase/auth_service";

import { ToastContainer } from "react-toastify";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Nav />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
