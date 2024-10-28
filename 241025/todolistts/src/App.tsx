import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { ToDoListContextProvider } from "./contexts/ToDoContext";

// styled
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

// mockup
// const mockData = [
//   "Typescript 복습하기",
//   "Next.js 예습하기",
//   "Node.js 공부하기",
// ];

const App = () => {
  // // toggle input
  // const [showToDoInput, setShowToDoInput] = useState(false);
  // // todo list
  // const [toDoList, setToDoList] = useState(mockData);
  // // todo search
  // const [toDo, setToDo] = useState("");

  // const onAdd = (toDo: string) => {
  //   if (toDo === "") return;

  //   setToDoList([toDo, ...toDoList]);
  //   setShowToDoInput(false);
  //   setToDo("");
  // };
  // const onDelete = (todo: string) => {
  //   setToDoList(toDoList.filter((item) => item !== todo));
  // };

  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;
