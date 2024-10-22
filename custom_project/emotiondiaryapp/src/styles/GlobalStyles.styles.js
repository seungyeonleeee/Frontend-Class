import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  /* fonts */
  @font-face {
    font-family: "HakgyoansimDunggeunmiso";
    src: url("/fonts/HakgyoansimDunggeunmisoTTFB.ttf") format("truetype");
  }
  @font-face {
    font-family: "Paperlogy";
    src: url("/fonts/Paperlogy-5Medium.ttf") format("truetype");
  }

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
    background: transparent;
    font-family: "HakgyoansimDunggeunmiso";
  }
  input {
    font-family: "Paperlogy";
  }
  textarea {
    font-family: "Paperlogy";
  }
  

  /* variable */
  :root {
    --bg-light-color: #fff;
    --bg-dark-color: #222;
    --bg-light-gray: #f4f4f4;
    --bg-dark-gray: #575757;
    --bg-orange-color: #F86F03;
    --bg-blue-color: #525FE1;
  } 

  /* common */
  body {
    background: var(--bg-light-color);
    color: var(--bg-dark-color);
    font-family: "Paperlogy";
  }
`;
