import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  // 3 최적화 - useCallback
  // console.log(`${id} TodoItem 업데이트`);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

// export default TodoItem;
export default React.memo(TodoItem);
// => state값이 복수라 todo의 값이 바뀌면 무조건 리랜더링
