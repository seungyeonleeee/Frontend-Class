// 100 useReducer, // 104 useRef, // 112 useEffect, // 115 useState
import React, { useReducer, useRef, useEffect, useState } from "react";

// 12
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// 16, // 19 Link
import { Routes, Route, Link } from "react-router-dom";

// 98
import styled from "styled-components";

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
import { type } from "@testing-library/user-event/dist/type";

// 99
const Wrapper = styled.div`
  padding: 20px;
`;

// 102
const reducer = (state, action) => {
  // 107
  switch (action.type) {
    // 114
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    // 109
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    // 111
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
};

// 103
const mockData = [
  {
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3",
    emotionId: 3,
  },
];

// 120 목업데이터 보내는 함수
export const DiaryStateContext = React.createContext();
// console.log(DiaryStateContext);

// 122 함수들 보내는 함수 (비효율적인 리렌더링 막기 위해)
export const DiaryDispatchContext = React.createContext();

const App = () => {
  // 116
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // 101
  const [data, dispatch] = useReducer(reducer, []);

  // 105
  const idRef = useRef(0);

  // 113
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });

    // 117
    setIsDataLoaded(true);
  }, []);

  // 106
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  // 108
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  // 110
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  // 118
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중 입니다!</div>;
  } else {
    // 119 else문 안에 return문 넣기
    return (
      // 13
      // <BrowserRouter>

      // 121
      <DiaryStateContext.Provider value={data}>
        {/* // 123 */}
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Wrapper>
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
              <Route
                // 26 파라미터 추가
                path="/diary/:id"
                element={<Diary />}
              />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </Wrapper>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      // </BrowserRouter>
    );
  }
};
// 15
// <Route path="/경로지정" element={<보여줄 페이지 />} />

export default App;
