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
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 50vw;
  & > div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

// 7
const boxArray = ["1", "2", "3", "4"];

const App09 = () => {
  // 2
  // const [clicked, setClicked] = useState(false);

  // 9
  const [id, setId] = useState<null | string>(null);

  // 1
  // const toggle = () => {
  //   // 3
  //   setClicked((prev) => !prev);
  // };

  return (
    <>
      <GlobalStyle />
      {/* // 10 Wrapper에 onClick={toggle} 주석 */}
      <Wrapper>
        <Grid>
          {/* <Box layoutId="hello" />
          <Box />
          <Box />
          <Box /> */}
          {/* // 8 */}
          {boxArray.map((i) => (
            <Box key={i} layoutId={i} onClick={() => setId(i)} />
          ))}
        </Grid>
        {/* // 4 */}
        <AnimatePresence>
          {/* // 11 clicked를 id로 바꿈 */}
          {id ? (
            <Overlay
              // 12
              onClick={() => setId(null)}
              // 5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* // 6 */}
              <Box layoutId={id} style={{ width: 400, height: 200 }} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default App09;
