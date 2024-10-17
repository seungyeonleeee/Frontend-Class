import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  position: relative;
  border-radius: 5px;
  padding: 10px;
  transition: background 0.3s;
  cursor: pointer;
  ${({ type }) =>
    type === "positive"
      ? `background: #64c964; color: #fff;`
      : type === "negative"
      ? `background: #fd565f; color: #fff;`
      : `background: #ccc; color: #000;`}
  &:hover, &:active {
    ${({ type }) =>
      type === "positive"
        ? `background: #64c000; color: #fff;`
        : type === "negative"
        ? `background: #fd565f; color: #fff;`
        : `background: #ccc; color: #000;`}
  }
  svg {
    width: 30px;
    height: 30px;
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
