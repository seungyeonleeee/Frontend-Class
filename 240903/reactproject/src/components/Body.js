import React from "react";
import "./Body.css";

const Body = ({ name, location, favorList }) => {
  const numA = 1;
  const numB = 2;
  const strA = "안녕";
  const strB = "리액트";
  const boolA = true;
  const boolB = false;

  const num = 19;

  // console.log(props);

  return (
    <div>
      <h1>Body</h1>
      <h2>{numA + numB}</h2>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA || boolB)}</h2>
      <h2>
        {num}는 {num % 2 === 0 ? "짝수" : "홀수"} 입니다
      </h2>

      {/* <h2>{props.name}</h2> */}
      <h2>{name}</h2>

      <h2>
        {name}는 {location}에 거주하고 있습니다.
        <br />
        {name}는 {favorList.length}개의 음식을 좋아합니다.
      </h2>
    </div>
  );
};

// 혹시라도 데이터를 못받아올때의 상황
Body.defaultProps = {
  favorList: [],
};

export default Body;
