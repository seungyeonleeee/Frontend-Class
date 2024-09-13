// 66
import React from "react";
// 69
import "./Button1.css";

const Button1 = ({ text, type }) => {
  // 67
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      // 68
      className={["Button", `Button_${btnType}`].join(" ")}
    >
      Button1
    </button>
  );
};

export default Button1;
