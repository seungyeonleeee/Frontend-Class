// 82
import React from "react";
// 85
import styled from "styled-components";
// 89
import CommentListItem from "./CommentListItem";

// 86
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & * {
    margin-bottom: 16px;
  }
`;

const CommentList = ({ comments }) => {
  // 87
  // console.log(props);
  // console.log(comments); // 배열

  return (
    <Wrapper>
      {
        // 90
        comments.map((comment) => {
          return <CommentListItem key={comment.id} comment={comment.content} />;
        })
      }
    </Wrapper>
  );
};

export default CommentList;
