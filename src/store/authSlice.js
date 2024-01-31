import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid, email, displayName } = action.payload.userData;

      state.userData = {
        uid,
        email,
        displayName,
      };
      state.status = true;
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
