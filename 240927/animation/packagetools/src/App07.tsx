import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { style } from "framer-motion/client";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Buttons = styled.div`
  position: absolute;
  bottom: 300px;
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

// 1
const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 7
const box = {
  // 15 (back)=>()
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

const App07 = () => {
  // 3
  const [visible, setVisible] = useState(1);
  // 11
  const [back, setBack] = useState(false);

  // 9
  const prevPlease = () => {
    // 13
    setBack(true);
    // 9
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  // 6
  const nextPlease = () => {
    // 12
    setBack(false);
    // 6
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
    // prev: visible이 기존에 갖고 있는 값
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence
          // 16
          mode="wait"
          custom={back}
        >
          {/* // 2 */}
          {/* {boxArray.map((i) => (
            <Box key={i}>{i}</Box>
          ))} */}
          {/* // 4 */}
          {boxArray.map((i) =>
            i === visible ? (
              <Box
                // 14
                custom={back}
                // 8
                variants={box}
                initial="initial"
                animate="visible"
                exit="exits"
                //
                // 10 i => visible 바꿈
                key={visible}
              >
                {visible}
              </Box>
            ) : null
          )}
        </AnimatePresence>
        {/* // 5 */}
        <Buttons>
          <Button onClick={prevPlease}>PREV</Button>
          <Button onClick={nextPlease}>NEXT</Button>
        </Buttons>
      </Wrapper>
    </>
  );
};

export default App07;
