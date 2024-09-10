// 5
import React from "react";
// 7
import styled from "styled-components";

// 8
const StyleButton = styled.button`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({ title, onClick }) => {
  // 10
  // console.log(props);

  return (
    <StyleButton
      // 15
      onClick={onClick}
    >
      {
        // 11 or 단락회로평가
        title || "button"
      }
    </StyleButton>
  );
};

export default Button;
