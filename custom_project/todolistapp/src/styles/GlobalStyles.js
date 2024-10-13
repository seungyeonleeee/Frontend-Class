import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  /* fonts */
  @font-face {
    font-family: "GmarketSans";
    src: url("/fonts/GmarketSansTTFMedium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Bold.ttf") format("truetype");
  }

  /* variables */
 

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
  input {
    border: none;
    border-bottom: 1px solid #000;
    transition: all .3s;
    &:focus {
      outline: none;
      border-bottom: 1px solid lightblue;
    }
  }

  body{ 
    font-family: "GmarketSans";
  }
`;
