import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
// import Login from "./components/Login";
import Footer from "./components/Footer";
import { login, logout } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "./firebase/auth_service";
// import SignUp from "./components/SignUp";
// import { auth } from "./firebase/config";
function App() {
  // console.log(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({userData} ));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      {/* <h1>welcome to the agriculture</h1> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
