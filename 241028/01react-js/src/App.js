import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
`;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgColor }) => bgColor};
// `;
// // style component의 확장적 개념(상속)
// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const Input = styled.input.attrs({ required: true })``;

const rotationAnimation = keyframes`
from {
  transform: rotate(0deg);
  border-radius: 0;
}
to {
  transform: rotate(360deg);
  border-radius: 50%;
}
`;
const Emoji = styled.span`
  font-size: 36px;
  transition: all 0.3s;
  cursor: pointer;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  background: teal;
  animation: ${rotationAnimation} 3s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const App = () => {
  return (
    <Container>
      {/* ThemeProvider */}
      <Title>Hello World</Title>

      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}

      {/* 동일한 style로 tag 변경 */}
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="#">
        Log out
      </Btn> */}

      {/* 상태선택자 형식으로 값 변경 */}
      {/* <Input required="true"></Input> */}

      {/* 애니메이션 */}
      <Box>
        <Emoji>🧡</Emoji>
      </Box>
      <Emoji>👩🏻‍🦰</Emoji>
    </Container>
  );
};

export default App;
