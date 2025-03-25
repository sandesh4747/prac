import React from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import NotFound from "./pages/NotFound";
import TodoTod from "./pages/home/TodoTod";
import TodoList from "./pages/home/TodoList";
import Product from "./pages/home/Product";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <Home /> }],
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
