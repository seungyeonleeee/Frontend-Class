import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: rgba(255, 87, 34, 1);
  color: #fff;
  font-size: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 87, 34, 0.8);
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// props는 객체라서 객체 형태로
interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
