import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";

import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";

import UserList from "./features/user/UserList";
import AddUser from "./features/user/AddUser";
import UpdateUser from "./features/user/UpdateUser";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <UserList />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "update-user/:id",
          element: <UpdateUser />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
