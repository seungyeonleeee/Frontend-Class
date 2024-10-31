import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAnimate, stagger, motion } from "framer-motion";
import DiaryItem from "./DiaryItem";
import Button from "./Button";

// Styled
const Wrapper = styled.section``;
const DiaryHeading = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;
const ListContents = styled.article``;
const LeftContent = styled.div`
  flex: 1.5;
`;
const RightContent = styled.div`
  flex: 2.5;
  button {
    width: 100%;
  }
`;
const SortButton = styled(motion.button)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background: var(--bg-light-color);
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.05);
  font: normal 14px/1 "HakgyoansimDunggeunmiso";
  letter-spacing: 2px;
  color: var(--bg-dark-gray);
  cursor: pointer;
`;
const SortList = styled.div`
  position: relative;
  svg {
    fill: var(--bg-dark-gray);
  }
  ul {
    width: 100%;
    position: absolute;
    top: 45px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg-pink-color);
    padding: 15px 20px;
    z-index: 1;
    li {
      font: normal 14px/1 "HakgyoansimDunggeunmiso";
      letter-spacing: 2px;
      color: var(--bg-light-color);
      cursor: pointer;
    }
  }
`;

// Sort Option
const sortOptionList = ["Latest", "Oldest"];

// Sort Animation
const useMenuAnimation = (isOpen) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.3 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 5px)"
          : "inset(10% 50% 90% 50% round 5px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.3,
      }
    );
  }, [isOpen]);

  return scope;
};

const DiaryList = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState(sortOptionList[0]);
  const [sortedData, setSortedData] = useState([]);

  const navigate = useNavigate();

  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort((a, b) => {
      if (sortType === "Latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    });
    setSortedData(copyList);
  }, [data, sortType]);

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <Wrapper>
      <DiaryHeading>
        <LeftContent>
          <SortList ref={scope}>
            <SortButton
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {sortType}
              <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </div>
            </SortButton>
            <ul
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50% round 5px)",
              }}
            >
              {sortOptionList.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSortType(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </SortList>
        </LeftContent>
        <RightContent>
          <Button type={"positive"} text={"New Diary"} onClick={onClickNew} />
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
