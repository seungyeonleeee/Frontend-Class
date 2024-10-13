import React, { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div>
      <h4>Todo List</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div>
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            // onUpdate={onUpdate}
            // onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
