import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "router",
  initialState: {
    isAuth: false,
  },
});
export const { isAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
