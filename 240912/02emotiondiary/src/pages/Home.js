// 127 useState, // 134 useContext, // 143 useEffect
import React, { useState, useContext, useEffect } from "react";
// 135
import { DiaryStateContext } from "../App";

// 30
// import { useSearchParams } from "react-router-dom";
// 45
// import Header from "../components/Header";
// 33
// import Button from "../components/Button";
// 52
// import Editor from "../components/Editor";
// 97 공통스타일정의 index.css

// 125
import Header from "../components/Header";
import Button from "../components/Button";

// 148
import DiaryList from "../components/DiaryList";

// 142, // 258 setPageTitle
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
  // 31
  // const [searchParams, setSearchParams] = useSearchParams();
  // // http://localhost:3000/?sort=latest
  // console.log(searchParams.get("sort")); // latest
  // // [[Prototype]]: URLSearchParams => 인스턴스 객체

  // 136 목업데이터 가져오기
  const data = useContext(DiaryStateContext);
  // console.log(data);

  // 128 버튼 클릭 시 월이 바뀌게
  const [pivotDtae, setPivotDate] = useState(new Date());

  // 137 해당 월에 매칭되어지는 일기의 값 업데이트
  const [filteredData, setFilteredData] = useState([]);

  // 144 data, pivotDtae의 값이 바뀔 때 마다 렌더링
  useEffect(() => {
    // 145
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDtae);
      // console.log(beginTimeStamp, endTimeStamp);

      // 146
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
    // Home.js의 state 확인해보기
  }, [data, pivotDtae]);

  // 259
  useEffect(() => {
    setPageTitle("Welcome Seungyeon's Diary");
  }, []);

  // 132
  const headerTitle = `${pivotDtae.getFullYear()}년 ${
    pivotDtae.getMonth() + 1
  }월`;

  // 129
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDtae.getFullYear(), pivotDtae.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDtae.getFullYear(), pivotDtae.getMonth() - 1));
  };

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
      {/* 126 */}
      <Header
        leftChild={
          <Button
            text={"<"}
            // 131
            onClick={onDecreaseMonth}
          />
        }
        title={
          // 133
          headerTitle
        }
        rightChild={
          <Button
            text={">"}
            // 130
            onClick={onIncreaseMonth}
          />
        }
      />
      {/* // 149 */}
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
