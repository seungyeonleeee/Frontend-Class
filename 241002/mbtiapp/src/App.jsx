import React from "react";
// 3
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

// 4 페이지 라우팅 설정
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
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

// 6 styled reset
const GlobalStyle = createGlobalStyle`
  ${reset} 

  @font-face {
    font-family: "SimKyungha";
    src: url("/fonts/SimKyungha.ttf") format("truetype");
  }

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

  body {
    font-family: "SimKyungha";
    /* background: url("https://i.pinimg.com/736x/1c/bf/47/1cbf47f7112e62ad68d0e7dc74e32605.jpg") center/cover no-repeat; */
    background: lightsteelblue;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <>
      {/* // 7 */}
      <GlobalStyle />
      {/* // 5 */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
