import React from "react";
import styled from "styled-components";

// 부모에게 props를 내려받으면 자식 스타일 컴포넌트도 interface 필요
interface ContainerProps {
  color: string;
}

const Container = styled.button<ContainerProps>`
  border: none;
  background: ${({ color }) => color};
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
