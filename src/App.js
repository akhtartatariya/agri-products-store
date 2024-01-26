import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
// import Login from "./components/Login";
// import Home from "./routes/Home";
import Footer from "./components/Footer";
// import SignUp from "./components/SignUp";
// import { auth } from "./firebase/config";
function App() {
  // console.log(auth);
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
