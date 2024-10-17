import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.styles";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "new",
        element: <New />,
      },
      {
        path: "diary/:id",
        element: <Diary />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
