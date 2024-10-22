import React, { useState, useReducer, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.styles";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { type } from "@testing-library/user-event/dist/type";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 370px;
  height: 100%;
  min-height: 100vh;
  padding: 0 20px 20px;
  margin: 0 auto;
  background: var(--bg-light-color);
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.1);
`;

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
  }
};
// Mockup 나중에 지우기
const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content:
      "mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });

    setIsDataLoaded(true);
  }, []);

  // Functions
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
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!setIsDataLoaded) {
    return <div>데이터를 불러오는 중 입니다!</div>;
  } else {
    return (
      <>
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
            </Wrapper>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
    );
  }
};

export default App;
