import React, { useState, useRef } from "react";

const Body5 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  console.log(textRef); // 객체 => current

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    // 유효성 검사
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
};

export default Body5;
