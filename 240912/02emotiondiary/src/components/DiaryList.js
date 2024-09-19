// 147, // 157 useState, // 167 useEffect
import React, { useState, useEffect } from "react";
// 162
import { useNavigate } from "react-router-dom";
// 152
import styled from "styled-components";
// 171
import DiaryItem from "./DiaryItem";
// 151
import Button from "./Button";

// 154
const Wrapper = styled.div``;

const DiaryContents = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0 30px;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;

const Select = styled.select`
  background: #ececec;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Nanum Pen Script", cursive;
`;

// 174
const ListContents = styled.div``;

// 155
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  // 150
  // console.log(props);
  // console.log(data);

  // 158 반복문 활용 option의 value값 넣기
  const [sortType, setSortType] = useState("latest");

  // 166 sorting한 결과값 업데이트
  const [sortedData, setSortedData] = useState([]);

  // 163
  const navigate = useNavigate();

  // 168
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };

    // const copyList = [...data]; // 중첩 데이터는 분리시키지 못함
    // data.sort(compare); // sort는 배열의 원본데이터 값은 변형시킴
    const copyList = JSON.parse(JSON.stringify(data)); // 원본데이터와 독립된 복사본 만들기
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  // 160
  const onChangeSortType = (e) => {
    // console.log(e.target.value);
    setSortType(e.target.value);
  };

  // 165
  const onClickNew = () => {
    navigate("/new");
  };

  return (
    // 153
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select
            // 159
            onChange={onChangeSortType}
            // 161
            value={sortType}
          >
            {/* // 156 */}
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            // 164
            onClick={onClickNew}
          />
        </RightContent>
      </DiaryContents>
      {/* // 172 */}
      <ListContents>
        {/* // 173 */}
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
