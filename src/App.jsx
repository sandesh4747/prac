import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";

import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./features/product/ProductList";
import RecipeList from "./features/recipe/RecipeList";
import BlogList from "./features/blog/BlogList";
import AddBlog from "./features/blog/AddBlog";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <ProductList />,
        },
        {
          path: "add-blog",
          element: <AddBlog />,
        },
        {
          path: "add-recipe",
          element: <RecipeList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
