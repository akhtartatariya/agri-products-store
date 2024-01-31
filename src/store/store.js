import { configureStore } from "@reduxjs/toolkit";

//Slices
import authSlice from "./authSlice";
import cartReducer from "./cartSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific action types causing the warning
        ignoredActions: ['auth/login'], // Replace with your actual action type
      },
    }),
});
export default store;
