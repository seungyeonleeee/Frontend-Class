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
`;
const EditorSection = styled.article`
  width: 100%;
`;
const EmotionGroup = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
        <h4>오늘의 감정</h4>
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
        <h4>오늘의 날짜</h4>
        <input type="date" value={state.date} onChange={handleChangeDate} />
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          value={state.content}
          onChange={handleChangeContent}
        />
      </EditorSection>
      <div>
        <Button text={"취소하기"} onClick={handleGoBack} />
        <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </Wrapper>
  );
};

export default Editor;
