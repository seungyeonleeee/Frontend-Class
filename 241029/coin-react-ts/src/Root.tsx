import React from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";

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

  /* common */
  body {
    font-family: "Source Sans 3", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

const App = () => {
  // Recoil
  const isDark = useRecoilValue(isDarkAtom);
  // console.log(isDark); // false => default값

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
};

export default App;
