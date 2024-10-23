import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "router",
  initialState: {
    isAuth: false,
    userRole: "GUEST",
    isAuthenticated: true,
  },
});
export const { isAuth, userRole, isAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
