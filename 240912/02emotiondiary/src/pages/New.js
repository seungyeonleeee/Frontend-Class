// 229, // 232
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// 233
import { DiaryDispatchContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
// 231
import Editor from "../components/Editor";

const New = () => {
  // 234
  const { onCreate } = useContext(DiaryDispatchContext);
  // console.log(fnc);
  // console.log(onCreate);

  // 230
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };

  // 235
  const onSubmit = (data) => {
    // console.log(data);
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        title={"새 일기 쓰기"}
        rightChild={<Button text={"Home >"} onClick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
