import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// 문자열로 바꿔서 출력해야함!
export default Header;
