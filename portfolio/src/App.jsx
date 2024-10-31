import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import ViewMoreButton from "./components/ViewMoreButton";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <About /> */}
      <Project />
      {/* <LoadingScreen /> */}
    </div>
  );
};

export default App;
