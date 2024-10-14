import React, {
  useRef,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";
import { styled } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

export const TodoContext = React.createContext();

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  /* height: 100vh;
  min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

// mockup data
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Javascript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case "DELETE": {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
};

const App = () => {
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdData: new Date().getTime(),
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

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList onUpdate={onUpdate} onDelete={onDelete} onCreate={onCreate} />
      </Wrapper>
    </TodoContext.Provider>
  );
};

export default App;
