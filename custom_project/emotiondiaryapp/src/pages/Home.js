import React, { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate } from "../util";
import FirstScreen from "../components/FirstScreen";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDtae, setPivotDtae] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDtae);

      setFilteredData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDtae]);

  const headerTitle = `${pivotDtae.getFullYear()}-${
    pivotDtae.getMonth() + 1 < 10
      ? "0" + (pivotDtae.getMonth() + 1)
      : pivotDtae.getMonth() + 1
  }`;

  const onIncreaseMonth = () => {
    setPivotDtae(new Date(pivotDtae.getFullYear(), pivotDtae.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDtae(new Date(pivotDtae.getFullYear(), pivotDtae.getMonth() - 1));
  };

  return (
    <>
      <Header
        leftChild={
          <Button
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            }
            onClick={onDecreaseMonth}
          />
        }
        title={headerTitle}
        rightChild={
          <Button
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            }
            onClick={onIncreaseMonth}
          />
        }
      />
      <DiaryList data={filteredData} />
    </>
  );
};

export default Home;
