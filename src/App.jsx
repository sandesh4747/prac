import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import { RouterProvider } from "react-router-dom";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";

import Home from "./features/home/Home";
import AdminPage from "./features/admin/AdminPage";
import ProductAddForm from "./features/admin/ProductAddForm";
import ProductEdit from "./features/admin/ProductEdit";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "admin-page",
          element: <AdminPage />,
        },
        {
          path: "addPrdouctForm",
          element: <ProductAddForm />,
        },
        {
          path: "edit-product/:id",
          element: <ProductEdit />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
