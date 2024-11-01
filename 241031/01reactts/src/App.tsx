import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GloblaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
  font-family: "Source Sans 3";;
  }
`;

const App = () => {
  return (
    <>
      <GloblaStyle />
      <ToDoList />
    </>
  );
};

export default App;
