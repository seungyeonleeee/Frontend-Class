import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Movie from "./routes/Movie";
import Movies from "./routes/Movies";

// Global Styles
const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

// Page Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <Movie />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
