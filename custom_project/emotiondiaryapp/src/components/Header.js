import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--bg-light-gray);
  padding: 20px 0;
  background: var(--bg-light-color);
  z-index: 1;
`;
const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font: normal 20px/1 "HakgyoansimDunggeunmiso";
`;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      <div>{leftChild}</div>
      <Title>{title}</Title>
      <div>{rightChild}</div>
    </Wrapper>
  );
};

export default Header;
