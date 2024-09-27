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
  gap: 200px;
`;

// 1
const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #00a5ff;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const App08 = () => {
  // 3
  const [clicked, setClicked] = useState(false);

  // 2
  const toggleClicked = () => {
    // 4
    setClicked((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper onClick={toggleClicked}>
        {/* <Box
          // 5
          style={{
            justifyContent: clicked ? "center" : "flex-start",
            alignItems: clicked ? "center " : "flex-start",
          }}
        >
          <Circle />
        </Box> */}
        {/* // 6 */}
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box>
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
};

export default App08;
