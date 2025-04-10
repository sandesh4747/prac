import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: [{ id: 1, title: "hello", detail: "Bye" }],
  },
  reducers: {},
});

export const {} = postSlice.actions;
