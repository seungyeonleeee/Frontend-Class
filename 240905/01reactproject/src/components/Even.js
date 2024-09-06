// 13 , // 16 useEffect
import React, { useEffect } from "react";

const Even = () => {
  // 17
  useEffect(() => {
    return () => {
      console.log("Even 컴포넌트 언마운트");
    };
  });

  return <div>현재 카운트는 짝수 입니다</div>;
};

export default Even;