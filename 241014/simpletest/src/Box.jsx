// 16
import React from "react";
// 18
import { useSelector } from "react-redux";

const Box = () => {
  // 19
  let count = useSelector((state) => state.count);

  return <div> This is Box {count}</div>;
};

export default Box;
