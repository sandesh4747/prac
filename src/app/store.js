import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "../pages/News/NewsSlice";

export const store = configureStore({
  reducer: {
    [newsSlice.name]: newsSlice.reducer,
  },
});
