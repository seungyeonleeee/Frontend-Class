import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

// Sort Option
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");

  const navigate = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // console.log(data);
  return (
    <div>
      <div>
        <div>
          <select onChange={onChangeSortType} value={sortType}>
            {sortOptionList.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button type={"positive"} />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
