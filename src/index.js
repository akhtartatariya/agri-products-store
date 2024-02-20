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

//Reducer
import { getTotals } from "./store/cartSlice";
import AddProduct from "./routes/AddProduct";
import Protected from "./components/ProtectedRoute/Protected";
import AllProducts from "./routes/AllProducts";
import EditProduct from "./routes/EditProduct";
import UserProfile from "./routes/UserProfile";
import Checkout from "./routes/Checkout";
import Dashboard from "./admin/Dashboard";
import OrderHistory from "./routes/OrderHistory";
import { SearchProvider } from "./components/context/SearchContext";
import Admin from "./admin/Admin";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/user-profile/:name" element={<UserProfile />} />
      <Route path="/silage_additives" element={<SilageAdditives />} />
      <Route path="/about" element={<About />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/order-history/:id" element={<OrderHistory />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/shipment" element={<Shipment />} />
      <Route path="/rightofwithdrawal" element={<RightOfWithdrawal />} />
      <Route path="/termsandconditions" element={<TermsAndCondition />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/admin" element={<Admin />} >
      <Route path="/admin/dashboard" element={<Dashboard />}/>
        <Route
          path="/admin/add-product"
          element={
            <Protected>
              <AddProduct />
            </Protected>
          }
        />
        <Route
          path="/admin/edit-product/:slug"
          element={
            <Protected>
              <EditProduct />
            </Protected>
          }
        />
        <Route
          path="/admin/all-products"
          element={
            <Protected>
              <AllProducts />
            </Protected>
          }
        />
      </Route>
    </Route>
  )
);

store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SearchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
