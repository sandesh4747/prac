import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";

import { RouterProvider } from "react-router-dom";
import TourList from "./features/user/TourList";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TourList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
