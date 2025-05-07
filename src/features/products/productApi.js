import { mainApi } from "../../app/mainApi";

export const productApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (val) => ({
        url: "/products",

        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
