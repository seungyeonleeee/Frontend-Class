import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  width: 362px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 12px 10px 10px;
  margin: 5px 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.subBgColor};
`;
const CheckBox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  input {
    /* appearance: none; */
    width: 100%;
    height: 100%;
    padding: 0;
    border: 1px solid ${({ theme }) => theme.grayColor};
    border-radius: 50%;
    cursor: pointer;
    &:checked {
      background: ${({ theme }) => theme.accentColor};
    }
  }
  /* svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    stroke: #fff;
  } */
`;
const TodoText = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4 {
    color: ${({ theme }) => theme.textColor};
  }
  span {
    font: normal 12px/1 "Montserrat";
    color: ${({ theme }) => theme.grayColor};
  }
`;
const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  svg {
    stroke: ${({ theme }) => theme.grayColor};
    transition: stroke 0.3s;
  }
  &:hover,
  &:active {
    svg {
      stroke: ${({ theme }) => theme.accentColor};
    }
  }
`;

const TodoItem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <Wrapper>
      <CheckBox
      // style={{
      //   background: isDone ? ({ theme }) => theme.accentColor : "transparent",
      // }}
      >
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </CheckBox>
      <TodoText>
        <h4>{content}</h4>
        <span>{new Date(createdDate).toLocaleDateString()}</span>
      </TodoText>
      <DeleteBtn onClick={onClickDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </DeleteBtn>
    </Wrapper>
  );
};
export default React.memo(TodoItem);
