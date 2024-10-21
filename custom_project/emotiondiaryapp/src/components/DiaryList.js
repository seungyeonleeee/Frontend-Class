import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";
import Button from "./Button";

const Wrapper = styled.section``;
const DiaryHeading = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ListContents = styled.article``;
const LeftContent = styled.div`
  flex: 1;
  select {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    background: var(--bg-light-gray);
    font-family: "Paperlogy";
    cursor: pointer;
  }
`;
const RightContent = styled.div`
  flex: 3;
  button {
    width: 100%;
  }
`;

// Sort Option
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort((a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    });
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <Wrapper>
      <DiaryHeading>
        <LeftContent>
          <select onChange={onChangeSortType} value={sortType}>
            {sortOptionList.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </LeftContent>
        <RightContent>
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </RightContent>
      </DiaryHeading>
      <ListContents>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
