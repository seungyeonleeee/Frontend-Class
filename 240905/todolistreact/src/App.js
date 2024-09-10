import "./App.css";
// 2 , // 7 , // 50 , useState 삭제, // 69 useCallback 추가
import React, { useRef, useReducer, useCallback } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
// 40
// import TestComp from "./components/TestComp";

// 73 , // 76 - export : 값 보내주기
export const TodoContext = React.createContext();
// console.log(TodoContext); // 미들웨어

// 1
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

// 52
const reducer = (state, action) => {
  // 54
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
      // mockTodo가 배열이기 때문에 []
    }

    // 56
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }

    // 58
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }

    default:
      return state;
  }
};

function App() {
  // 51
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  // 3
  // const [todo, setTodo] = useState(mockTodo);
  // console.log(todo);

  // 8
  const idRef = useRef(3);
  // console.log(idRef.current);

  // 4 - Create 기능, // 70 useCallback
  const onCreate = useCallback((content) => {
    // content : 사용자가 input에 적은 값
    // const newItem = {
    //   // 5
    //   // id: 3,
    //   // 9
    //   id: idRef.current,
    //   isDone: false,
    //   content, // content: content,
    //   createdDate: new Date().getTime(),
    // };

    // // 6 기존의 배열 찾아오고 신규값도 같은 배열안에 추가
    // setTodo([newItem, ...todo]);

    // 53
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });

    // 10
    idRef.current += 1;
  }, []);

  // 35 - update 기능
  // 해당 아이템을 선택하면 체크 가능하게
  // 71 useCallback
  const onUpdate = useCallback((targetId) => {
    // setTodo(todo) => 배열
    // setTodo(
    //   todo.map(
    //     (it) => (it.id === targetId ? { ...it, isDone: !it.isDone } : it)
    //     // isDone: !it.isDone => isDone만 true로 반환
    //   )
    // );

    // 55
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  // 38 - Delete 기능
  // 72 useCallback
  const onDelete = useCallback((targetId) => {
    // setTodo(todo.filter((it) => it.id !== targetId));
    // 선택받지 못한애들로만 다시 배열로 만들어줘

    // 57
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      {/* 74 Provider - 공급자역할 */}
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}>
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
      {/* <TodoEditor onCreate={onCreate} /> */}
      {/* <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
}
// 11
// <TodoEditor onCreate={onCreate} />
// 22
// <Todolist todo={todo} />

// 36
// props drilling
// App > TodoList > TodoItem 으로 건내주는 중
// App에 mockup data가 있기 때문에 onUpdate()를 여기서 생성
// TodoList는 정거장

export default App;
