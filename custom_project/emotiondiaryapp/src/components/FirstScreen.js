import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getEmotionImgById } from "../util";

const Wrapper = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  min-width: 370px;
  height: 100%;
  min-height: 100vh;
  padding: 0 20px 20px;
  margin: 0 auto;
  background: var(--bg-light-pink);
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 6;
`;
const Title = styled(motion.article)`
  width: 100%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  cursor: default;
  h1 {
    font: normal 50px/1 "HakgyoansimDunggeunmiso";
    color: var(--bg-pink-color);
    text-shadow: 5px 5px 1px rgba(0, 0, 0, 0.05);
  }
  h3 {
    font: normal 40px/1 "HakgyoansimDunggeunmiso";
    color: var(--bg-purple-color);
    margin: 10px 0 20px;
  }
  p {
    font-size: 20px;
  }
`;
const Emotion = styled(motion.div)`
  width: 25vh;
  height: 25vh;
  position: absolute;
  top: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:nth-of-type(1) {
    left: 15%;
  }
  &:nth-of-type(2) {
    left: 30%;
  }
  &:nth-of-type(3) {
    left: 50%;
    z-index: 1;
  }
  &:nth-of-type(4) {
    left: 70%;
  }
  &:nth-of-type(5) {
    left: 85%;
  }
`;

const FirstScreen = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const emotions = [
    { finalY: windowHeight * 0.75, duration: 1.2, rotate: 330, delay: 0 },
    { finalY: windowHeight * 0.55, duration: 1.4, rotate: 350, delay: 0.3 },
    { finalY: windowHeight * 0.7, duration: 1.3, rotate: 0, delay: 0.5 },
    { finalY: windowHeight * 0.54, duration: 1.5, rotate: 370, delay: 0.1 },
    { finalY: windowHeight * 0.75, duration: 1.2, rotate: 390, delay: 0.4 },
  ];

  return (
    <Wrapper
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.8, duration: 1 }}
    >
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }}
      >
        <h1>EMOTION DIARY</h1>
        <h3>감정일기장</h3>
        <p>오늘의 감정을 기록하세요!</p>
      </Title>
      {emotions.map((emotion, index) => (
        <Emotion
          key={index}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{
            y: [`0%`, emotion.finalY],
            scale: [1, 1, 0.95, 1],
            rotate: [0, emotion.rotate],
            opacity: [0, 1],
          }}
          transition={{
            duration: emotion.duration,
            ease: "easeInOut",
            delay: emotion.delay,
            opacity: {
              duration: emotion.duration,
              ease: "easeOut",
            },
            type: "spring",
            stiffness: 25,
            damping: 6,
          }}
          style={{ translateX: `-50%` }}
        >
          <img src={getEmotionImgById(index + 1)} />
        </Emotion>
      ))}

      {/* <Emotion
        initial={{ y: -200, rotate: 0 }}
        animate={{
          y: [0, windowHeight - 260, windowHeight - 280, windowHeight - 250], // 바닥에서 반동으로 살짝 튀기기
          scale: [1, 1, 0.9, 1], // 바닥에서 살짝 눌렸다가 복구
          rotate: 300,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 0.75, 1], // 각 애니메이션의 진행 시간 비율
          // repeat: Infinity,
          // repeatType: "reverse",
        }}
      >
        <img src={getEmotionImgById(1)} alt="emotion" />
      </Emotion>
      <img src={getEmotionImgById(2)} alt="emotion" />
      <img src={getEmotionImgById(3)} alt="emotion" />
      <img src={getEmotionImgById(4)} alt="emotion" />
      <img src={getEmotionImgById(5)} alt="emotion" /> */}
    </Wrapper>
  );
};

export default FirstScreen;
