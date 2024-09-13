import React from "react";
// 30
// import { useSearchParams } from "react-router-dom";
// 45
// import Header from "../components/Header";
// 33
// import Button from "../components/Button";
// 52
// import Editor from "../components/Editor";
// 97 공통스타일정의 index.css

const Home = () => {
  // 31
  // const [searchParams, setSearchParams] = useSearchParams();
  // // http://localhost:3000/?sort=latest
  // console.log(searchParams.get("sort")); // latest
  // // [[Prototype]]: URLSearchParams => 인스턴스 객체

  return (
    <div>
      {/* <Button
        // 36
        title="기본버튼"
        // 41
        onClick={() => {
          alert("Hi");
        }}
      />
      <Button
        // 42
        title="긍정버튼"
        type="positive"
        onClick={() => {
          alert("Hi");
        }}
      />
      <Button
        // 43
        text="부정버튼"
        type="negative"
        onClick={() => {
          alert("Hi");
        }}
      /> */}
      {/* 46 */}
      {/* <Header
        title="Home"
        leftChild={
          <Button
            text="긍정버튼"
            onClick={() => {
              alert("positive button");
            }}
          />
        }
        rightChild={
          <Button
            text="부정버튼"
            onClick={() => {
              alert("negative button");
            }}
          />
        }
      /> */}
      {/* // 53 */}
      {/* <Editor
        // 94
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        // 72
        onSubmit={() => alert("작성완료")}
      /> */}
      Home Page
    </div>
  );
};

export default Home;
