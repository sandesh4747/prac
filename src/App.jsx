import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import TodoPage from "./pages/todo/TodoPage";
import { todoSlice } from "./pages/todo/todoSlice";

import TodoAdd from "./pages/todo/TodoAdd";

export default function App() {
  console.log(todoSlice);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />,
        },
        {
          path: "add-todo",
          element: <TodoAdd />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
