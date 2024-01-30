import { configureStore } from "@reduxjs/toolkit";

//Slices
import authSlice from "./authSlice";
import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartReducer,
  },
});
export default store;
