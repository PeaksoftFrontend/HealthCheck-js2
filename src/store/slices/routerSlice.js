import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: {
    isAuth: false,
    userRole: "USER",
  },
});
export const { isAuth, userRole } = routerSlice.actions;
export const routerReducer = routerSlice.reducer;
