import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";

const Edit = () => {
  const negative = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);

  const goBack = () => {
    negative(-1);
  };

  const onClickDelete = () => {};

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
      </div>
    );
  }
};

export default Edit;
