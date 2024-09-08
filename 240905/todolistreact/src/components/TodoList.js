import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
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

  return (
    <div className="Todolist">
      <h4>Todo List</h4>
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
            <TodoItem key={it.id} {...it} />
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

export default TodoList;
