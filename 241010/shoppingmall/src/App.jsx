import React, { useState } from "react";
// 2
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// 7
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

// 10
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

const App = () => {
  // 29 로그인 여부 제어
  const [authenticate, setAuthenticate] = useState(false);

  // 8, // 30 router 위치 안으로
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          // 31
          authenticate={authenticate}
          setAuthenticate={setAuthenticate}
        />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              // 32
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: (
            // 37
            <PrivateRoute
              // 33
              authenticate={authenticate}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      {/* // 3 */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      {/* // 11 */}
      <GlobalStyles />
      {/* // 9 */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
