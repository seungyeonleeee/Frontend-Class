import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  // 27
  // console.log(id, isDone, content, createdDate);

  // 67
  console.log(`${id} TodoItem 업데이트`);

  // 37
  const onChangeCheckbox = () => {
    // onUpdate는 콜백함수로 받아와야 함
    onUpdate(id);
  };

  // 39
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="todoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="data_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

// export default TodoItem;
// 68
export default React.memo(TodoItem);
//  editor 컴포넌트 => 값이 신규 입력
// > App 컴포넌트 업데이트
// > 함수 역시 리렌더링
// 그래서 안먹히는 것처럼 보임
