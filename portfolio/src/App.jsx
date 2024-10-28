import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import ViewMoreButton from "./components/ViewMoreButton";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      안녕하세요
      <ViewMoreButton text={"Read More"} />
    </div>
  );
};

export default App;
