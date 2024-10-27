import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-light-color);
`;
const CircleContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Circle = styled(motion.span)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(
    97.4% 97.4% at 69.37% 8.11%,
    #ffe447 0%,
    #ffc646 27.54%,
    #ffa650 79.45%,
    #f06c8c 100%
  );
`;

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const circleVariants = {
  start: {
    scale: 0.9,
    y: 0,
  },
  end: {
    scale: 1,
    y: -20,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const LoadingScreen = () => {
  return (
    <Wrapper>
      <CircleContainer
        variants={containerVariants}
        initial={"start"}
        animate={"end"}
      >
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </CircleContainer>
    </Wrapper>
  );
};

export default LoadingScreen;
