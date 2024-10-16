import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftChild = styled.div``;
const Title = styled.h1``;
const RightChild = styled.div``;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      <LeftChild>{leftChild}</LeftChild>
      <Title>{title}</Title>
      <RightChild>{rightChild}</RightChild>
    </Wrapper>
  );
};

export default Header;
