import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
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
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  /* variables */
  :root {
    --inner-width: 1150px;
  }

  /* common */
  body {
    font-family: "Source Sans 3", sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
