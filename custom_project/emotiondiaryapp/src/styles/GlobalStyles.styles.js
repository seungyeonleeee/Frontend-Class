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
   span{
    font-family: "arial";
   }
  }
  input {
    font-family: "Paperlogy";
    &[type="date"]{
      border: none;
      &:focus{
        outline: none;
      }
    }
  }
  textarea {
    font-family: "Paperlogy";
    resize: none;
    border: none;
    &::placeholder{
      opacity: 1;
      transition: opacity .3s;
    }
    &:focus{
        outline: none;
        &::placeholder{
          opacity: 0;
        }
      }
  }
  

  /* variable */
  :root {
    --bg-light-color: #fff;
    --bg-dark-color: #222;
    --bg-light-gray: #eee;
    --bg-dark-gray: #575757;
    --bg-light-pink: #fff4fc;
    --bg-pink-color: #F679B8;
    --bg-purple-color: #B87ED6;
  } 

  /* common */
  body {
    background: var(--bg-light-color);
    color: var(--bg-dark-color);
    font-family: "Paperlogy";
  }
`;
