import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.78:5000/api" }),
  endpoints: () => ({}),
});
