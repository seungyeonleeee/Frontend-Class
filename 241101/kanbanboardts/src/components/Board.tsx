import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

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

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {/* 매개변수로 Draggable에게 어떤한 값을 전달하기 위해 함수 형태로 작성 */}
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
            {/* magic.placeholder : 드래그 할 때 자식이 빠지더라도 부모 높이 값 유지 */}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
