import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  background: ${({ theme }) => theme.cardColor};
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px;
`;

interface DraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: DraggableCardProps) => {
  // console.log(toDo);
  // 최적화 필요 => React.memo

  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
