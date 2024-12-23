import React from "react";
import reset from "styled-reset";
import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import PretendardRegular from "./assets/fonts/Pretendard-Regular.ttf";
import PretendardMedium from "./assets/fonts/Pretendard-Medium.ttf";
import PretendardBold from "./assets/fonts/Pretendard-Bold.ttf";
import theme from "./theme";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  /* fonts */
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendardRegular}) format("truetype");
    font-display: swap;
    font-weight: 400;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendardMedium}) format("truetype");
    font-display: swap;
    font-weight: 500;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendardBold}) format("truetype");
    font-display: swap;
    font-weight: 700;
  }

  /* reset */
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
  button {
    border: none;
    background: none;
    cursor: pointer;
    font: 400 1.6rem/1 "Pretendard", sans-serif;
    color: ${({ theme }) => theme.white.lighter};
  }

  /* variables */
  :root {
    --inner-width: 1150px;
  }

  /* common */
  html {
    font-size: 10px;
  }
  body {
    font: 400 1.6rem/1.3 "Pretendard", sans-serif;
    color: ${({ theme }) => theme.white.lighter};
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
