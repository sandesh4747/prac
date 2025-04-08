import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../pages/post/postSlice";

export const store = configureStore({
  reducer: {
    [postSlice.name]: postSlice.reducer,
  },
});
