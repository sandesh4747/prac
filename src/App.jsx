import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";

import { RouterProvider } from "react-router-dom";
import NewsPage from "./pages/News/NewsPage";
import NewsAdd from "./pages/News/NewsAdd";
import NewsEdit from "./pages/News/NewsEdit";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <NewsPage />,
        },
        {
          path: "add-news",
          element: <NewsAdd />,
        },
        {
          path: "edit-news/:newsId",
          element: <NewsEdit />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
