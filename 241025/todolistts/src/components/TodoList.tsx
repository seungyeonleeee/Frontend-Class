import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ToDoListContext } from "../contexts/ToDoContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// interface Props {
//   toDoList: Array<string>;
//   onDelete?: (todo: string) => void;
// }

const TodoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {toDoList.map((todo, index) => (
        <TodoItem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
