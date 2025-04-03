import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import TodoPage from "./pages/todo/TodoPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
