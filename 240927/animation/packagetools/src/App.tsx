// 2
import { motion } from "framer-motion";
// 1
import { style } from "framer-motion/client";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset} // 크로스 브라우징
  /* font */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  
  /* reset */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }
  ul,li{
    list-style: none;
  }
  a{
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
// styled components + motion
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

// 5
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* // 3 */}
        {/* <Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} /> */}
        {/* // 4 */}
        {/* damping: 무중력 상태 (10이 초기값) */}
        {/* <Box
          transition={{ duration: 3, type: "spring", mass: 10, delay: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        /> */}
        {/* // 6 */}
        <Box variants={myVars} initial="start" animate="end" />
      </Wrapper>
    </>
  );
};

export default App;
