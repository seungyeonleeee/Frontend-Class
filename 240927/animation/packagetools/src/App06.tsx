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
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

// 7
const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

const App06 = () => {
  // 3
  const [showing, setShowing] = useState(false);

  // 2
  const toggleShowing = () => {
    // 5
    setShowing((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* // 6 */}
        <AnimatePresence>
          {/* // 4 */}
          {showing ? (
            <Box
              // 7
              variants={boxVariants}
              initial="initial"
              animate="visible"
              exit="leaving"
            />
          ) : null}
        </AnimatePresence>
        {/* // 1 */}
        <button onClick={toggleShowing}>Click</button>
      </Wrapper>
    </>
  );
};

export default App06;
