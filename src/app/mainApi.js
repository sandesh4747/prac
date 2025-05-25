import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseUrl = "https://prac-rbt3.onrender.com";
export const baseUrl = "http://localhost:5000";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
});
