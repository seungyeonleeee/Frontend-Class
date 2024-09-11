import React from "react";
// 58 , // 75 useParams
import { useNavigate, useParams } from "react-router-dom";
// 63
import styled from "styled-components";
// 83
import CommentList from "../list/CommentList";
// 55
import TextInput from "../ui/TextInput";
// 56
import Button from "../ui/Button";
// 78
import data from "../../data.json";

// 64
const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 16px;
`;

// 69
const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

// 73
const PostContainer = styled.div`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px 16px;
`;

// 71
const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

// 72
const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

// 74
const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const PostViewPage = () => {
  // 59
  const navigate = useNavigate();

  // 76
  // const parameter = useParams();
  // console.log(parameter); // 객체 => postId

  // 77
  const { postId } = useParams();
  // console.log(postId);

  // 79
  const post = data.find((item) => {
    return item.id == postId;
  });
  // console.log(post);

  return (
    <Wrapper>
      <Container>
        <Button
          // 70
          title="뒤로 가기"
          onClick={() => navigate("/")}
        />

        <PostContainer>
          <TitleText>
            {
              // 80
              post.title
            }
          </TitleText>
          <ContentText>
            {
              // 81
              post.content
            }
          </ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList
          // 84
          comments={post.comments}
        />

        <TextInput
          // 65
          height={40}
        />
        <Button
          // 57
          title="댓글 작성하기"
          // 60
          onClick={() => navigate("/")}
        />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;
