import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ToDo, toDoState } from "../atoms";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
const Area = styled.div<AreaProps>`
  background: ${(props) =>
    props.isDraggingOver
      ? "lightpink"
      : props.isDraggingFromThis
      ? "crimson"
      : "dodgerblue"};
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

interface AreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
interface BoardProps {
  toDos: ToDo[];
  boardId: string;
}
interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // // console.log(inputRef); // current => 제어할 대상
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };

  const setToDos = useSetRecoilState(toDoState);

  const { register, setValue, handleSubmit } = useForm<FormProps>();
  // console.log(form);
  const onVaild = ({ toDo }: FormProps) => {
    // console.log(data);

    const newToDo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });

    setValue("toDo", "");
  };
  return (
    <Wrapper>
      {/* <input ref={inputRef} type="text" placeholder="Please..." />
      <button onClick={onClick}>Click</button> */}
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onVaild)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task On ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {/* 매개변수로 Draggable에게 어떤한 값을 전달하기 위해 함수 형태로 작성 */}
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
            {/* magic.placeholder : 드래그 할 때 자식이 빠지더라도 부모 높이 값 유지 */}
            {/* snapshot.isDraggingOver : boolean값 */}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
