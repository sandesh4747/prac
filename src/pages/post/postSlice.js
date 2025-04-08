import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: [
      // {
      //   id: "1",
      //   title: "First Post",
      //   content: "This my first post!",
      // },
      // {
      //   id: "2",
      //   title: "Second Post",
      //   content: "This my second post!",
      // },
      // {
      //   id: "3",
      //   title: "Third Post",
      //   content: "This my third post!",
      // },
    ],
  },
  /*
  action:Describes what change occurred in  app

Contains the data needed to make that change (called the payload)

Has a type property that identifies the action
  
  Payload: Contains the data needed to process the action

Can be any type (object, string, number, etc.)

In this case: { title, content } from the form */
  reducers: {
    addPost: (state, action) => {
      const post = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.posts.push(post);
      /*
      after dispatch code runs this is what addPost will be updated to and after state.posts.push(post) .Posts  array  will be updated
      
      const post = {
  id: nanoid(),  // Generates unique ID (e.g. "XkJ3n9")
  title: action.payload.title,  // = "My First Post"
  content: action.payload.content  // = "This is my content"
};
state.posts.push(post);*/
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(
        (post) => post.id === id
      ); /* here if post.id matches id then value of existingPost will be object value of post  for eg. like this  {
        id: "1",
        title: "First Post",
        content: "This my first post!",
      }, otherwise it will be undefined*/
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      /*action.payload here is exactly the "1" we passed

The filter keeps all posts EXCEPT the one matching this ID */
    },
  },
});
export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
