import React, { useState } from "react";
// 9, // 14 useSelector
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// 17
import Box from "./Box";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const App = () => {
  // const [count, setCount] = useState(0);

  // 10
  const dispatch = useDispatch();

  // 15
  const count = useSelector((state) => state.count);

  // 26
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const increase = () => {
    // setCount(count + 1);

    // 11
    dispatch({
      type: "INCREAMENT",
      // 20 payload 인자값의 역할, 반드시 객체
      payload: { num: 5 },
    });
  };

  // 29
  const decrease = () => {
    dispatch({
      type: "DECREAMENT",
    });
  };

  // 23
  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: { id: "David", pw: "1234" },
    });
  };

  return (
    <Wrapper>
      <h1>{count}</h1>
      <ButtonGroup>
        <button onClick={increase}>증가</button>
        {/* // 28 */}
        <button onClick={decrease}>감소</button>
      </ButtonGroup>
      {/* <Box /> */}
      {/* // 27 */}
      <h1>
        {id}, {pw}
      </h1>
      {/* // 22 */}
      <button onClick={login}>로그인</button>
    </Wrapper>
  );
};

export default App;
