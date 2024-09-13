// 44
import React from "react";
// 48
import styled from "styled-components";

// 49
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #e2e2e2;
`;

// 50
const LeftChild = styled.div``;
const Title = styled.div`
  font-size: 25px;
`;
const RightChild = styled.div``;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      {/* 47 */}
      <LeftChild>{leftChild}</LeftChild>
      <Title>{title}</Title>
      <RightChild>{rightChild}</RightChild>
    </Wrapper>
  );
};

export default Header;
