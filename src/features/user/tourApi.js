import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tourApi = createApi({
  reducerPath: "tourApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3000/api/v1", // Base URL for all endpoints
  }),
  endpoints: (builder) => ({
    //get all tours
    getAllTours: builder.query({
      query: () => ({
        url: "/tours", // This will be appended to baseUrl
        method: "GET",
      }),
      providesTags: ["Tour"],
    }),
    //get single tour by id
    getTourById: builder.query({
      query: (id) => ({
        url: `/tours/${id}`,
      }),
      providesTags: ["Tour"],
    }),
    //create new tour
    addTour: builder.mutation({
      query: (data) => ({
        url: "/tours",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Tour"],
    }),
    // update tour
    updateTour: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/tours/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tour"],
    }),

    //Delete tour
    removeTour: builder.mutation({
      query: (id) => ({
        url: `/tours/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tour"],
    }),
  }),
});

export const {
  useGetAllToursQuery,
  useAddTourMutation,
  useRemoveTourMutation,
  useUpdateTourMutation,
  useGetTourByIdQuery,
} = tourApi;
