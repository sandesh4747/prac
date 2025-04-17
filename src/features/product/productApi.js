import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      /*this query is For GET requests (data fetching) */
      query: (queryData) => ({
        /* this query is  A function that returns the request configuration*/
        url: "/",

        method: "GET",
        params: queryData,
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/${id}`,

        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/add",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } =
  productApi;
