import React from "react";
import styled from "styled-components";
import { motion, useTransform } from "framer-motion";
import { emotionList } from "../util";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  cursor: default;
`;
const EmotionSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h3 {
    text-align: center;
    font: normal 20px/1 "HakgyoansimDunggeunmiso";
    div {
      display: inline-block;
      color: var(--bg-orange-color);
    }
  }
`;
const ContentSection = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
  background: var(--bg-light-gray);
  padding: 20px;
  p {
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
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

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((item) => item.id === emotionId);

  return (
    <Wrapper>
      <EmotionSection>
        <ImgBox>
          <img src={emotionItem.img} />
        </ImgBox>
        <h3>
          I Feel{" "}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
          >
            {emotionItem.name}
          </motion.div>
        </h3>
      </EmotionSection>
      <ContentSection>
        <p>{content}</p>
      </ContentSection>
    </Wrapper>
  );
};

export default Viewer;
