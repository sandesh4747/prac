import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";

import PostPage from "./pages/post/PostPage";
import PostAdd from "./pages/post/PostAdd";
import PostEdit from "./pages/post/PostEdit";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <PostPage />,
        },
        {
          path: "add-post",
          element: <PostAdd />,
        },
        {
          path: "edit-post/:postId" /* this postId gets id value from post.id located at PostCard 
          navigate(`/edit-post/${post.id}`); */,
          element: <PostEdit />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
