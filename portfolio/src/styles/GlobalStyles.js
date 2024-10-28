import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  /* fonts */
  @font-face {
  font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff') format('truetype');
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


`;
