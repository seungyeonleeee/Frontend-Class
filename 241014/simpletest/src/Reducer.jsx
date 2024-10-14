// 3 reducer 함수
import React from "react";

// 12 초기화 되어진 값
const initialState = {
  count: 0,
  // 24
  id: "",
  pw: "",
};

// 13
const Reducer = (state = initialState, action) => {
  // console.log(action); // type: "INCREAMENT"
  // if문
  // if (action.type === "INCREAMENT") {
  //   return { ...state, count: state.count + 1 };
  //   // if문의 실행 return
  // }
  // return { ...state }; // final return
  // // 값을 store로 보내야 하기 때문에 항상 return 필수
  // // state가 복수값이 올 수 있기 때문에 전개연산자 구문 필수

  // switch문
  switch (action.type) {
    case "INCREAMENT":
      // return { ...state, count: state.count + 1 };
      // 21
      return { ...state, count: state.count + action.payload.num };
    // 30
    case "DECREAMENT":
      return { ...state, count: state.count - 1 };
    // 25
    case "LOGIN":
      return { ...state, id: action.payload.id, pw: action.payload.pw };
    default:
      return { ...state };
  }
};

export default Reducer;
