import "./App.css";
import Login from "./components/Login";
import Home from "./routes/Home";
// import SignUp from "./components/SignUp";
// import { auth } from "./firebase/config";
function App() {
  // console.log(auth);
  return (
    <div>
      <h1>welcome to the agriculture</h1>
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Home />
    </div>
  );
}

export default App;
