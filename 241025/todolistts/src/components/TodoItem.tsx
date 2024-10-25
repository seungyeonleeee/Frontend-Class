import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Label = styled.div`
  flex: 1;
  font-size: 18px;
`;

interface Props {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label={"삭제"} onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
