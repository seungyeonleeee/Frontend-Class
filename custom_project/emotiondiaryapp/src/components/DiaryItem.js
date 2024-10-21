import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getEmotionImgById } from "../util";
import Button from "./Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const DiarySection = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ButtonSection = styled.div`
  min-width: 70px;
`;
const ImgBox = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #f00;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const InfoBox = styled.div`
  width: 100%;
`;

const DiaryItem = ({ id, date, content, emotionId }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Wrapper>
      <DiarySection onClick={goDetail}>
        <ImgBox>
          <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </ImgBox>
        <InfoBox>
          <div>{content}</div>
          <div>{new Date(Number(date)).toLocaleDateString()}</div>
        </InfoBox>
      </DiarySection>
      <ButtonSection>
        <Button text={"수정하기"} onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default DiaryItem;
