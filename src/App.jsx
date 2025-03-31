import React from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import NotFound from "./pages/NotFound";
import TodoTod from "./pages/home/TodoTod";
import TodoList from "./pages/home/TodoList";
import Product from "./pages/home/Product";
import CategoryItems from "./pages/Category_items/CategoryItems";
import RandomMeal from "./pages/Category_items/RandomMeal";
import Posts from "./pages/Category_items/Posts/Posts";
import PostDetail from "./pages/Category_items/Posts/PostDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "category-items/:label",
          element: <CategoryItems />,
        },
        {
          path: "random-meal",
          element: <RandomMeal />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "post/:id",
          element: <PostDetail />,
        },
      ],
    },
    { path: "/todo1", element: <TodoList /> },
    { path: "/todo2", element: <TodoTod /> },
    { path: "/product", element: <Product /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}
