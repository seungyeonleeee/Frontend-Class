import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getEmotionImgById } from "../util";
import Button from "./Button";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  background: var(--bg-light-gray);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const DiarySection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const DiaryImg = styled(motion.div)`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const DiaryContent = styled.div`
  width: 90%;
  overflow: hidden;
  p {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
    max-height: 3em;
  }
`;
const DiaryDate = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font: normal 14px/1 "HakgyoansimDunggeunmiso";
  letter-spacing: -1px;
  color: var(--bg-dark-gray);
`;
const DiaryButtonGroup = styled.div`
  width: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  transform: translateY(-25%);
  z-index: 2;
  svg {
    stroke: var(--bg-dark-gray);
    transition: stroke 0.3s;
  }
  &:hover {
    svg {
      stroke: #f679b8;
    }
  }
`;
const ButtonSection = styled(motion.div)`
  width: 140px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  display: flex;
  align-items: center;
  border: 1px solid var(--bg-dark-gray);
  border-radius: 8px;
  overflow: hidden;
  button {
    min-width: 70px;
    border-radius: 0;
    background: var(--bg-light-color);
    &:first-child {
      border-right: 1px solid var(--bg-dark-gray);
    }
  }
`;

const DiaryItem = ({ id, date, content, emotionId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  const openBtnGroup = () => {
    setIsVisible((current) => !current);
  };

  return (
    <Wrapper>
      <DiarySection onClick={goDetail}>
        <DiaryImg
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </DiaryImg>
        <DiaryContent>
          <p>{content}</p>
        </DiaryContent>
        <DiaryDate>{new Date(Number(date)).toLocaleDateString()}</DiaryDate>
      </DiarySection>
      <DiaryButtonGroup onClick={openBtnGroup}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        <AnimatePresence>
          {isVisible && (
            <ButtonSection
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button text={"EDIT"} onClick={goEdit} />
              <Button text={"DELETE"} onClick={goEdit} />
            </ButtonSection>
          )}
        </AnimatePresence>
      </DiaryButtonGroup>
    </Wrapper>
  );
};

export default DiaryItem;
