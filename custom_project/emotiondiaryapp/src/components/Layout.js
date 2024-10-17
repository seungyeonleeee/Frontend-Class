import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/* <Header
        title={"title"}
        leftChild={"leftchild"}
        rightChild={"rightchild"}
      /> */}
      <Outlet />
    </>
  );
};

export default Layout;
