import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67f1ee5fc733555e24ae56eb.mockapi.io",
  }),

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Blog"],
    }),

    removeBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useRemoveBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
