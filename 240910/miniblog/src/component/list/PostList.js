// 19
import React from "react";
// 23
import styled from "styled-components";
// 27
import PostListItem from "./PostListItem";

// 24
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PostList = ({ posts, onClickItem }) => {
  // 28
  // console.log(posts);

  return (
    // 25
    <Wrapper>
      {
        // 29
        posts.map((post) => (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => onClickItem(post)}
          />
        ))
      }
    </Wrapper>
  );
};

export default PostList;
