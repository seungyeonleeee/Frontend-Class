// 88 useContext
import React, { useState, useRef, useContext } from "react";
import "./TodoEditor.css";
// 89
import { TodoContext } from "../App";

const TodoEditor = () => {
  // 91 { onCreate } 매개변수 지우기

  // 90
  const { onCreate } = useContext(TodoContext);

  // 12
  // console.log(onCreate); // => 함수 도착

  // 15
  const [content, setContent] = useState("");

  // 19
  const inputRef = useRef();

  // 14
  const onChangeContent = (e) => {
    // 17
    setContent(e.target.value);
  };

  // 21
  const onKeyDown = (e) => {
    // console.log(e); // keyCode = 13 => enter
    if (e.keyCode === 13) onSubmit();
  };

  // 13
  const onSubmit = () => {
    // 18 예외조항처리
    if (!content) {
      // 19
      inputRef.current.focus();
      return;
    }

    // 16
    onCreate(content);

    // 20
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 ToDo"
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
