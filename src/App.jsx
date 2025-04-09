import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import TodoPage from "./pages/todo/TodoPage";
import { todoSlice } from "./pages/todo/todoSlice";

import TodoAdd from "./pages/todo/TodoAdd";
import TodoEdit from "./pages/todo/TodoEdit";

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
        {
          path: "edit-todo/:id",
          element: <TodoEdit />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
