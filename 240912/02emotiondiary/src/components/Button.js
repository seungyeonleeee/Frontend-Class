// 32
import React from "react";
// 34
import styled from "styled-components";

// 35
const ButtonItem = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 30px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;

  ${
    // 38
    // (props) => console.log(props)
    // 39
    ({ type }) =>
      type === "positive"
        ? `background: #64c964; color: #fff;`
        : type === "negative"
        ? `background: #fd565f; color: #fff;`
        : `background: #ccc; color: #000;`
  }
`;

const Button = ({ text, type, onClick }) => {
  // 37
  // console.log(title, type);

  return (
    <ButtonItem type={type} onClick={onClick}>
      {text || "button"}
    </ButtonItem>
  );
};

export default Button;
