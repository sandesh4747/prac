import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
