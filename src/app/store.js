import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "../pages/News/newsSlice";

export const store = configureStore({
  reducer: {
    [newsSlice.name]: newsSlice.reducer,
  },
});
