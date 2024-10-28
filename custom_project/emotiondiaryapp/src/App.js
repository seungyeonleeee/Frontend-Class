import React, { useState, useReducer, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.styles";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import FirstScreen from "./components/FirstScreen";
import LoadingScreen from "./components/LoadingScreen";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 370px;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 0 20px 20px;
  margin: 0 auto;
  background: var(--bg-light-pink);
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.1);
`;

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));

      return newState;
    }
    case "UPDATE": {
      const newState = state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
      localStorage.setItem("diary", JSON.stringify(newState));

      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));

      return newState;
    }
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }

    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }

    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;

    dispatch({
      type: "INIT",
      data: localData,
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

  if (!isDataLoaded) {
    return <LoadingScreen />;
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
