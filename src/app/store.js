import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      // extra features caching / invalidation / polling
    ]),
});
