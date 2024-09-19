// 170
import React from "react";
// 177
import { useNavigate } from "react-router-dom";
// 178
import styled from "styled-components";
// 191
import Button from "./Button";
// 176
import { getEmotionImgById } from "../util";

// 179
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
`;

// 180
const DiaryContent = styled.div``;

// 188
const InfoSection = styled.div`
  flex: 1;
  cursor: pointer;
`;

// 193
const ButtonSection = styled.div`
  min-width: 70px;
`;

// 189
const DateItem = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// 190
const ContentItem = styled.div`
  font-size: 20px;
`;

// 183
const ImgBg = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.img_section_1 {
    background: #64c964;
  }
  &.img_section_2 {
    background: #9dd772;
  }
  &.img_section_3 {
    background: #fdce17;
  }
  &.img_section_4 {
    background: #fd8446;
  }
  &.img_section_5 {
    background: #fd565f;
  }
`;

// 181
const Img = styled.img`
  width: 50%;
`;

const DiaryItem = ({ id, date, content, emotionId }) => {
  // 174
  // console.log(props);
  // console.log(id, date, content, emotionId);

  // 185
  const navigate = useNavigate();

  // 187
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  // 192
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <Wrapper>
      {/* {
        // 175
        content
      } */}
      <DiaryContent>
        {/* // 182 */}
        <ImgBg
          // 184
          className={`img_section_${emotionId}`}
          // 186
          onClick={goDetail}
        >
          <Img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
        </ImgBg>
      </DiaryContent>
      <InfoSection>
        <DateItem>{new Date(Number(date)).toLocaleDateString()}</DateItem>
        <ContentItem>{content.slice(0, 25)}</ContentItem>
      </InfoSection>
      <ButtonSection>
        <Button text={"수정하기"} onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default DiaryItem;
