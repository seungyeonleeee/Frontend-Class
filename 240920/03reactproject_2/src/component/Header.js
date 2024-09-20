import React from "react";
import "./Header.css";

const Header = () => {
  // 2 최적화 - React.memo
  // console.log("Header 업데이트");
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
