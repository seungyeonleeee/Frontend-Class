import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import ViewMoreButton from "./components/ViewMoreButton";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      {/* <Header /> */}
      <Home />
    </div>
  );
};

export default App;
