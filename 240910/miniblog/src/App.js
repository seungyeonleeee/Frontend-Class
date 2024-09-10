// 1
import styled from "styled-components";
// 3 페이지 분기
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

// 2
const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        {/* 페이지 만들고 // 4 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
