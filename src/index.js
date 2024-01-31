import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Routes
import Home from "./routes/Home";
import About from "./routes/About";
import SilageAdditives from "./routes/SilageAdditives";
import FAQs from "./routes/FAQs";
import Contact from "./routes/Contact";
import Payment from "./routes/Payment";
import Shipment from "./routes/Shipment";
import RightOfWithdrawal from "./routes/RightOfWithdrawal";
import TermsAndCondition from "./routes/TermsAndCondition";
import Cart from "./routes/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="silage_additives" element={<SilageAdditives />} />
      <Route path="about" element={<About />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="payment" element={<Payment />} />
      <Route path="shipment" element={<Shipment />} />
      <Route path="rightofwithdrawal" element={<RightOfWithdrawal />} />
      <Route path="termsandconditions" element={<TermsAndCondition />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
