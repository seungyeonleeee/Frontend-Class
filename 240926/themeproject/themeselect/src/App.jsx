// 8
import { useState } from "react";
// 2
import { ThemeProvider, styled, createGlobalStyle } from "styled-components";
// 3
import { darkTheme, lightTheme } from "./theme";
// 6
import Home from "./Home";

// 4
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
// 10
const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

function App() {
  // 9
  const [isDark, setIsDark] = useState(false);

  // 11
  const toggleDark = () => {
    setIsDark((current) => !current);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Button onClick={toggleDark}>다크모드</Button>
        <Home />
      </ThemeProvider>
    </>
  );
}
// ThemeProvider 최상위에 있어야 함
// theme이라는 속성이 있어야 함

export default App;
