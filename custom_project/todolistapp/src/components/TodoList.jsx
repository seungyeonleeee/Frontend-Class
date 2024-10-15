import React, { useState, useMemo, useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const UlItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
  li {
    display: flex;
    align-items: center;
    gap: 4px;
    font: normal 16px/1 "Montserrat";
    color: ${({ theme }) => theme.grayColor};
    &::before {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.grayColor};
    }
    span {
      font: normal 16px/1 "GmarketSans";
      color: ${({ theme }) => theme.textColor};
      margin-top: 4px;
    }
  }
`;
const InputItem = styled.div`
  width: 362px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px 0 5px;
  border-radius: 10px;
  background: ${({ theme }) => theme.subBgColor};
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.grayColor};
    margin-bottom: 4px;
  }
  input {
    font: normal 14px/1 "GmarketSans";
    color: ${({ theme }) => theme.textColor};
    &:focus {
    }
  }
`;

const TodoList = () => {
  const { todo } = useContext(TodoContext);

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
    <>
      <UlItem>
        <li>
          Total Number : <span>{totalCount}</span>
        </li>
        <li>
          Completed To-Do : <span>{doneCount}</span>
        </li>
        <li>
          Incompleted To-Do : <span>{notDoneCount}</span>
        </li>
      </UlItem>
      <InputItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="찾고 싶은 검색어를 입력하세요"
        />
      </InputItem>
      <div>
        {getSearchResult().map((item, i) => (
          <TodoItem key={i} {...item} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
