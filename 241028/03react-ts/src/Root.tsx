import React from "react";
import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
