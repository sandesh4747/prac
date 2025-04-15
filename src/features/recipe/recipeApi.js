import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/recipes" }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => ({
        url: "/",

        method: "GET",
      }),
    }),
    getSingleRecipe: builder.query({
      query: (id) => ({
        url: `/${id}`,

        method: "GET",
      }),
    }),
    addRecipe: builder.mutation({
      query: (data) => ({
        url: "/add",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllRecipesQuery, useLazyGetAllRecipesQuery } = recipeApi;
