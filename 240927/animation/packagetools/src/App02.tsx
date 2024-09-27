import { delay, motion, stagger } from "framer-motion";
import { del } from "framer-motion/client";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: {
    scale: 2,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "50%",
  },
  drag: {
    background: "yellowgreen",
    transition: {
      duration: 3,
    },
  },
};

function App02() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box
          // whileHover={{ scale: 2, rotateZ: 90 }}
          // whileTap={{ scale: 1, borderRadius: "50%" }}
          drag
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </Wrapper>
    </>
  );
}

export default App02;
