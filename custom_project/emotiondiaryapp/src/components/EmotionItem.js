import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EmotionContent = styled(motion.div)`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: scale(1) translate(-50%, 50%);
    background: var(--bg-pink-color);
    color: var(--bg-light-color);
    padding: 6px 10px;
    border-radius: 10px;
    opacity: 0;
    z-index: -1;
    cursor: default;
    transition: all 0.3s;
  }
  &:hover {
    span {
      opacity: 1;
      z-index: 1;
      transform: translate(-50%, 100%);
    }
  }
  &.EmotionItem_on {
    transform: scale(1.2);
  }
`;
const FeelingTitle = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  span {
    color: var(--bg-pink-color);
  }
`;

const EmotionItem = ({ id, name, img, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <>
      <EmotionContent
        className={isSelected ? `EmotionItem_on` : null}
        onClick={handleOnClick}
      >
        <img src={img} alt={`emotion${name}`} />
        <span>{name}</span>
      </EmotionContent>
      {isSelected ? (
        <FeelingTitle>
          I Feel <span>{name}</span>
        </FeelingTitle>
      ) : null}
    </>
  );
};

export default EmotionItem;
