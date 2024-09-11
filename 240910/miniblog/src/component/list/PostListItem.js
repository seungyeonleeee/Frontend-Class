// 26
import React from "react";
// 32
import styled from "styled-components";
// 37
import VideoList from "./VideoList";

// 38
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// 34
const Wrapper = styled.div`
  width: 700px;
  height: 108px;
  padding: 0 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  :#fff ;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: lightgray;
  }
`;

// 33
const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListItem = ({ post, onClick }) => {
  // 30
  // console.log(props);

  return (
    <Container>
      <VideoList
        // 41
        thumbnailUrl={post.thumbnailUrl}
        videoUrl={post.videoUrl}
        onClick={onClick}
      />
      <Wrapper
        // 35
        onClick={onClick}
      >
        <TitleText>
          {
            // 31
            post.title
          }
        </TitleText>
      </Wrapper>
    </Container>
  );
};

export default PostListItem;
