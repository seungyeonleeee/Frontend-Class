import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import LoadingScreen from "../components/LoadingScreen";
import { setPageTitle } from "../util";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  useEffect(() => {
    setPageTitle(`${id} Diary Edit`);
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate("/");
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  if (!data) {
    return <LoadingScreen />;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< Back"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button text={"Delete"} type={"negative"} onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
