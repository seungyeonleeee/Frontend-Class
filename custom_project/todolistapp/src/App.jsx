import React, { useState, useRef, useReducer, useCallback } from "react";
import { ThemeProvider, styled } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

export const TodoContext = React.createContext();

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 768px; */
  /* height: 100vh;
  min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

const localTodo = JSON.parse(localStorage.getItem("todo")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const newState = [action.newItem, ...state];
      localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case "DELETE": {
      const newState = state.filter((item) => item.id !== action.targetId);
      localStorage.setItem("todo", JSON.stringify(newState));
      if (newState.length === 0) localStorage.removeItem("todo");
      return newState;
    }
    default:
      return state;
  }
};

const App = () => {
  const [todo, dispatch] = useReducer(reducer, localTodo);

  const idRef = useRef(1);

  const [isDark, setIsDark] = useState(false);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const toggleDark = () => {
    setIsDark((current) => !current);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <button onClick={toggleDark}>다크모드</button>
        <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
          <TodoEditor />
          <TodoList />
        </TodoContext.Provider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
