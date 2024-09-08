import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate }) => {
  // 27
  // console.log(id, isDone, content, createdDate);

  return (
    <div className="todoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="data_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
