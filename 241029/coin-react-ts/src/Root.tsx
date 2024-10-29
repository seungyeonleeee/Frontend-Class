import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* font */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  /* reset */
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

  /* common */
  body {
    font-family: "Source Sans 3", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};

export default App;
