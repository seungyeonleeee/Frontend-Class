// 51,  // 55 useState,  // 95 useEffect, // 253 useCallback
import React, { useState, useEffect, useCallback } from "react";
// 75
import { useNavigate } from "react-router-dom";
// 77
import styled from "styled-components";
// 64
import Button from "./Button";
// 67
// import Button1 from "./Button1";
// 87
import EmotionItem from "./EmotionItem";
// 60, // 83 emotionList 추가
import { getFormattedDate, emotionList } from "../util";

// 78
const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 22px;
  }
`;

// 79
const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  width: 93%;
  min-height: 200px;
  resize: none;
`;

// 80
const Input = styled.input`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

// 81
const Buttongroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 85
const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({ initData, onSubmit }) => {
  // 76
  const navigate = useNavigate();

  // 56
  const [state, setState] = useState({
    // date: "",
    // 61
    date: getFormattedDate(new Date()),
    emotionId: 1, // util.js
    content: "",
  });

  // 96
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  // 58
  const handleChangeDate = (e) => {
    setState({ ...state, date: e.target.value });
    // date값만 바뀌기 때문에 나머지는 그대로 두고
  };

  // 63
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  // 72
  const handleSubmit = () => {
    onSubmit(state); // 최신값으로 변경한다
  };

  // 74 바로 직전 단계로 돌아가는 함수
  const handleGoBack = () => {
    // 76
    navigate(-1);
  };

  // 89, // 254 useCallback
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  return (
    // 54
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        {/* // 57 */}
        <div>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <Emotiongroup>
          {/* // 84 */}
          {emotionList.map((it) => (
            // <img key={it.id} src={it.img} alt={it.name} />
            // 88 리펙토링
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        {/* // 62 */}
        <div>
          <Textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </EditorSection>

      <EditorSection>
        {/* // 65 */}
        {/* <Button1 text={"취소하기"} />
        <Button1 text={"작성완료"} type={"positive"} /> */}
        {/* // 71 */}
        <Buttongroup>
          <Button
            text={"취소하기"}
            // 73
            onClick={handleGoBack}
          />
          <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
