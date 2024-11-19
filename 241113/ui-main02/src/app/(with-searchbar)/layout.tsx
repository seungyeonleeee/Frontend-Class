"use client"; // Searchbar가 client 컴포넌트이기 때문에

// search폴더의 하위 파일들은 이 layout의 영향을 받음 (상속)
// 공통 컴포넌트 역할
import React, { ReactNode } from "react";
import Searchbar from "./searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
};

export default Layout;
