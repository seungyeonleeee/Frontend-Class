// 88
import React from "react";
// 92
import styled from "styled-components";

// 93
const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  background: #fff;
  transition: background 0.3s;
  &:hover {
    background: lightgray;
  }
`;

const CommentListItem = ({ comment }) => {
  // 91
  // console.log(props);

  return <Wrapper>{comment}</Wrapper>;
};

export default CommentListItem;
