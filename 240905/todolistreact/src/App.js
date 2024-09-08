import "./App.css";
// 2 , // 7
import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

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

function App() {
  // 3
  const [todo, setTodo] = useState(mockTodo);
  // console.log(todo);

  // 8
  const idRef = useRef(3);
  // console.log(idRef.current);

  // 4 - Create
  const onCreate = (content) => {
    // content : 사용자가 input에 적은 값
    const newItem = {
      // 5
      // id: 3,
      // 9
      id: idRef.current,
      isDone: false,
      content, // content: content,
      createdDate: new Date().getTime(),
    };

    // 6 기존의 배열 찾아오고 신규값도 같은 배열안에 추가
    setTodo([newItem, ...todo]);

    // 10
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}
// 11
// <TodoEditor onCreate={onCreate} />
// 22
// <Todolist todo={todo} />

export default App;
