import styled from "styled-components";
import { toDoSeleter, toDoState, categoryState, Categories } from "../atoms";
import CreateTodo from "./CreateTodo";
import { useRecoilValue, useRecoilState } from "recoil";
import ToDo from "./ToDo";
import React from "react";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  padding-top: 100px;
  /* background: ${({ theme }) => theme.bgColor}; */
  /* color: ${({ theme }) => theme.textColor}; */
  hr {
    width: 70%;
    background: #000;
    margin: 0 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: coral;
`;

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  // const selectorOutput = useRecoilValue(toDoSeleter);
  // console.log(selectorOutput);

  // const [todo, doing, done] = useRecoilValue(toDoSeleter);
  // useRecoilValue : 값을 찾아오는 역할
  const toDos = useRecoilValue(toDoSeleter);
  const [category, setCategory] = useRecoilState(categoryState);
  // useRecoilState : 값을 찾아오고 수정도 가능

  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as any);
    // console.log(category);
  };

  return (
    <Container>
      <Title>Todo List</Title>
      {/* <hr />
        <CreateTodo />
        <h3>TODO</h3>
        <ul>
          {toDos.map((item) => (
            <ToDo key={item.id} {...item} />
          ))}
        </ul>
        <h3>DOING</h3>
        <ul>
          {toDos.map((item) => (
            <ToDo key={item.id} {...item} />
          ))}
        </ul>
        <h3>DONE</h3>
        <ul>
          {toDos.map((item) => (
            <ToDo key={item.id} {...item} />
          ))}
        </ul> */}
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateTodo />
      {toDos?.map((toDoItem) => (
        <ToDo key={toDoItem.id} {...toDoItem} />
      ))}
      {/* {category === "DOING" &&
        doing.map((toDoItem) => <ToDo key={toDoItem.id} {...toDoItem} />)}
      {category === "DONE" &&
        done.map((toDoItem) => <ToDo key={toDoItem.id} {...toDoItem} />)} */}
    </Container>
  );
};

export default ToDoList;
