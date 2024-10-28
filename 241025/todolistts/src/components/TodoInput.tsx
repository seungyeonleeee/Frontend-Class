import React, { useState, useContext } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import Title from "./Title";
import { ToDoListContext } from "../contexts/ToDoContext";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  background: #fff;
  z-index: 1;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface Props {
  onClose: () => void;
}

const TodoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState("");

  // onAdd함수를 직접 받지 않고 한번 가공
  // Button컴포넌트의 onClick은 매개변수 받지 않기로 했기 때문
  const onAddTodo = () => {
    if (toDo === "") return;

    onAdd(toDo);
    setToDo("");
    onClose();
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label={"할 일 추가"} />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label={"추가"} color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default TodoInput;
