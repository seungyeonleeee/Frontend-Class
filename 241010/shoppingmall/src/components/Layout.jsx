import React from "react";
// 페이지 라우팅 두번째 방법
// 4 최상위 루트 컴포넌트
import { Outlet } from "react-router-dom";
// 5 어떤 페이지를 가던 공통 컴포넌트
import Navbar from "./Navbar";

const Layout = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      {/* // 6 */}
      <Navbar
        // 44
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
      />
      <Outlet />
    </>
  );
};

export default Layout;
