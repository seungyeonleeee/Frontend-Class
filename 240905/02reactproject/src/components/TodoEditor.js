import React from "react";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 ToDo 작성하기 📌</h4>
      <div className="editor_wrapper">
        <input placeholder="새로운 ToDo..." />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
