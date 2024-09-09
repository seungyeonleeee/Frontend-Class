import React from "react";
// 41
// import { useState } from "react";

// 45 useState를 대체
import { useReducer } from "react";

// 47 오버로드
const reducer = (state, action) => {
  // 49
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
};

const TestComp = () => {
  // // 42
  // const [count, setCount] = useState(0);

  // // 43
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };

  // // 44
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  // 46
  // [state변수, 상태변화촉발함수] = useReducer(상태변화함수, 초기값)
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

// 48
// dispatch({액션객체})
// 인자값 액션객체 type 필수

export default TestComp;
