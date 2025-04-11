import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => ({
        url: "/recipes",

        method: "GET",
      }),
    }),
    getSingleRecipe: builder.query({
      query: () => ({
        url: "/recipes/1",

        method: "GET",
      }),
    }),
  }),
});
