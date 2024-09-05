import React from "react";

const Controller = ({ handleSetCount }) => {
  // console.log(props);
  // console.log(handleSetCount);

  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div>
  );
  // 콜백이 없으면 파싱되면서 바로 읽혀서 무한루프
};

export default Controller;
