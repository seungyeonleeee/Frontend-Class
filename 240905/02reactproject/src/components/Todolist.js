import React from "react";
import { useState } from "react";
import "./TodoList.css";
import Todoitem from "./Todoitem";

const todolist = ({ todo }) => {
  // 23
  // console.log(todo);

  // 30
  const [search, setSearch] = useState("");

  // 29
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

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
        {
          // 24
          todo.map((it) => (
            // <div>{it.content}</div>
            // 26
            <Todoitem key={it.id} {...it} />
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

export default todolist;
