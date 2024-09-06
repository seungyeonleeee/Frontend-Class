import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
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

  return (
    <div className="TodoList">
      <h4>Todo List 🎈</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {/* {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))} */}
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

export default TodoList;
