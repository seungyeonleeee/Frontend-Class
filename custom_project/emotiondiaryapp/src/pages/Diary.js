import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../util";
import Viewer from "../components/Viewer";
import Header from "../components/Header";
import Button from "../components/Button";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = useDiary(id);

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, content, emotionId } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))}`;

    const goBack = () => {
      navigate(-1);
    };
    const goEdit = () => {
      navigate(`/edit/${id}`);
    };
    return (
      <div>
        <Header
          leftChild={<Button text={"< BACK"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"EDIT"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
