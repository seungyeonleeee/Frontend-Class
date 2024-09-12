import React from "react";

// 12
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// 16, // 19 Link
import { Routes, Route, Link } from "react-router-dom";

// 3 이미지 소스 가져오는 방법 - 1 (상대경로)
// import emotion1 from "./img/emotion1.png";

// 8
// import { getEmotionImgById } from "./util";

// 10
// 페이지 라우팅을 위해 페이지 만들기

// 11
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const App = () => {
  return (
    // 13
    // <BrowserRouter>
    <div>
      {/* <img src={emotion1}></img>
        <img
          src={
            // 4 이미지 소스 가져오는 방법 - 2 (절대경로)
            `${process.env.PUBLIC_URL}/img1/emotion2.png`
          }
        ></img> */}
      {/* <img
          // 9 잘 나오는지 확인
          src={getEmotionImgById(1)}
        />
        <img src={getEmotionImgById(2)} />
        <img src={getEmotionImgById(3)} />
        <img src={getEmotionImgById(4)} />
        <img src={getEmotionImgById(5)} /> */}
      {/* 14 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        {/* 20 Link = a태그 */}
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
    </div>
    // </BrowserRouter>
  );
};
// 15
// <Route path="/경로지정" element={<보여줄 페이지 />} />

export default App;
