import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";

import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./features/Home/HomePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
