// 54
import React from "react";
// 61
import styled from "styled-components";

// 62
const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  ${
    // 68
    ({ height }) => height && `height: ${height}px`
  }
`;

const TextInput = ({ height }) => {
  // 66
  // console.log(height);

  return (
    <StyledTextarea
      // 67
      height={height}
    ></StyledTextarea>
  );
};

export default TextInput;
