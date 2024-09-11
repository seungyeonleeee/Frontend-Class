import React from "react";
// 12
import { useNavigate } from "react-router-dom";
// 16
import styled from "styled-components";
// 20
import PostList from "../list/PostList";
// 6
import Button from "../ui/Button";
// 21
import data from "../../data.json";

// 17
const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 0 auto;
`;

// 18
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & * {
    margin-bottom: 16px;
  }
`;

const MainPage = () => {
  // 13
  const navigate = useNavigate();
  // console.log(navigate); // 함수

  return (
    <Wrapper>
      <Container>
        <Button
          // 9
          title="글 작성하기"
          // 14 콜백으로 전달
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          // 22
          posts={data}
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
