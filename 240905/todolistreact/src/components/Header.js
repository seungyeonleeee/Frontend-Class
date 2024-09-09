import React from "react";
import "./Header.css";

const Header = () => {
  // 65
  // console.log("Header 업데이트");
  // 새로운 todo 작성 시 헤더도 렌더링
  // App의 자식들 중 하나만 업데이트가 되어도 다른 자식들에게 영향을 줌

  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// 문자열로 바꿔서 출력해야함!

// export default Header;
// 66 - 고차컴포넌트화
export default React.memo(Header);
