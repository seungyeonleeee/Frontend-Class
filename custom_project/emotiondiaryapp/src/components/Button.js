import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  position: relative;
  border-radius: 5px;
  padding: 10px;
  opacity: 1;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
  ${({ type }) =>
    type === "positive"
      ? `background: var(--bg-pink-color); color: var(--bg-light-color);`
      : type === "negative"
      ? `background: var(--bg-purple-color); color: #fff;`
      : `background: var(--bg-light-color); color: var(--bg-pink-color);`}
  &:hover, &:active {
    opacity: 0.8;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Button = ({ text, type, onClick }) => {
  return (
    <ButtonItem type={type} onClick={onClick}>
      {text || "Button"}
    </ButtonItem>
  );
};

export default Button;
