import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate, emotionList } from "../util";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 20px 0;
`;
const EditorSection = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h4 {
    font: normal 12px/1 "HakgyoansimDunggeunmiso";
    letter-spacing: 2px;
    color: var(--bg-dark-gray);
  }
  input[type="date"] {
    background: var(--bg-light-color);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.05);
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.05);
  }
`;
const EmotionGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;
const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({ ...state, date: e.target.value });
  };
  const handleChangeContent = (e) => {
    setState({ ...state, content: e.target.value });
  };
  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleChangeEmotion = (emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  };

  return (
    <Wrapper>
      <EditorSection>
        <h4>Today </h4>
        <input type="date" value={state.date} onChange={handleChangeDate} />
      </EditorSection>
      <EditorSection>
        <h4>How was your day?</h4>
        <EmotionGroup>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </EmotionGroup>
      </EditorSection>
      <EditorSection>
        <h4>Diary</h4>
        <textarea
          placeholder="일기를 작성해 보세요"
          value={state.content}
          onChange={handleChangeContent}
        />
      </EditorSection>
      <ButtonSection>
        <Button text={"취소하기"} onClick={handleGoBack} />
        <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default Editor;
