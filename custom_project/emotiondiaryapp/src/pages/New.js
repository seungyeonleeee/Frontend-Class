import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";
import { setPageTitle } from "../util";

const New = () => {
  useEffect(() => {
    setPageTitle(`New Diary`);
  }, []);

  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"< Back"} onClick={goBack} />}
        title={"New Diary"}
        rightChild={<Button text={"Home >"} onClick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
