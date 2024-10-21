import React from "react";
import styled from "styled-components";
import { emotionList } from "../util";

const Wrapper = styled.section``;
const EmotionSection = styled.article``;
const ContentSection = styled.article``;
const Title = styled.h3`
  span {
    color: var(--bg-orange-color);
  }
`;
const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ContentBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
  background: var(--bg-light-gray);
  padding: 40px 20px;
  p {
    line-height: 1.4;
  }
`;

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((item) => item.id === emotionId);

  return (
    <Wrapper>
      <EmotionSection>
        <Title>
          I Feel <span>{emotionItem.name}</span>
        </Title>
        <ImgBox>
          <img src={emotionItem.img} />
        </ImgBox>
      </EmotionSection>
      <ContentSection>
        <Title>오늘의 일기</Title>
        <ContentBox>
          <p>{content}</p>
        </ContentBox>
      </ContentSection>
    </Wrapper>
  );
};

export default Viewer;
