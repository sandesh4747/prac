import { configureStore } from "@reduxjs/toolkit";
import { tourApi } from "../features/user/tourApi";

export const store = configureStore({
  reducer: {
    [tourApi.reducerPath]: tourApi.reducer,
  },
  middleware: (getDefalutMiddleWare) =>
    getDefalutMiddleWare().concat(tourApi.middleware),
});
