// 62 useMemo 추가, 77 useContext 추가
import React, { useState, useMemo, useContext } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
// 79
import { TodoContext } from "../App";

const TodoList = () => {
  // 82 { todo, onUpdate, onDelete } 매개변수 삭제
  // 78
  // const storeData = useContext(TodoContext);
  // 80
  // console.log(storeData);
  // 81
  // const { todo, onUpdate, onDelete } = useContext(TodoContext);
  // 83, // 92 todo = []
  const { todo = [] } = useContext(TodoContext);

  // 23
  // console.log(todo);

  // 30
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 31
  const getSearchResult = () => {
    // 32
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content
            // 34
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
        );
  };

  // 29
  // const onChangeSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // 59 ,   // 63 useMemo
  const analyzeTodo = useMemo(() => {
    // 61
    // console.log("analyzeTodo 함수호출");
    // 검색기능을 써도 무조건 실행됨 => 최적화 안됨
    // todoList 안에 input의 상태가 업데이트 되기 때문

    // 59
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  // 60
  // const { totalCount, doneCount, notDoneCount } = analyzeTodo{};
  // console.log(totalCount, doneCount, notDoneCount);

  // 64
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="Todolist">
      <h4>Todo List</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {/* {
          // 24
          todo.map((it) => (
            // <div>{it.content}</div>
            // 26
            <TodoItem key={it.id} {...it} />
          ))
        } */}
        {
          // 33
          getSearchResult().map((it) => (
            <TodoItem
              key={it.id}
              {...it}
              // 84
              // onUpdate={onUpdate}
              // onDelete={onDelete}
            />
          ))
        }
      </div>
    </div>
  );
};
// 25
// map함수 쓰면 콘솔창 에러 Warning: Each child in a list should have a unique "key" prop.
// 28
// <Todoitem key={it.id} {...it} />

// 75
// TodoList.defaultProps = {
//   todo: [],
// };
// 곧 없어질 문법이라 오류메세지 뜸

export default TodoList;
