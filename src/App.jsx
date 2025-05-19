import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import { RouterProvider } from "react-router-dom";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import AdminPage from "./features/admin/AdminPage";
import Home from "./features/home/Home";

import ProductAddForm from "./features/admin/ProductAddForm";
import ProductEdit from "./features/admin/ProductEdit";
import Product from "./features/products/Product";
import CartPage from "./features/carts/CartPage";
import ProfileMainPage from "./features/user/ProfileMainPage";
import OrderDetail from "./features/orders/OrderDetail";
import AdminRoute from "./components/AdminRoute";

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
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "carts",
          element: <CartPage />,
        },
        {
          path: "user-profile",
          element: <ProfileMainPage />,
        },
        {
          path: "orders/:id",
          element: <OrderDetail />,
        },
        {
          element: <AdminRoute />,
          children: [
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
