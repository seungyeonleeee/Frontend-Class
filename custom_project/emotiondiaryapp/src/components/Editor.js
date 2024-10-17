import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EditorSection = styled.article`
  width: 100%;
  border: 1px solid #f00;
`;

const Editor = () => {
  return (
    <Wrapper>
      <EditorSection>
        <h4>오늘의 날짜</h4>
      </EditorSection>
    </Wrapper>
  );
};

export default Editor;
