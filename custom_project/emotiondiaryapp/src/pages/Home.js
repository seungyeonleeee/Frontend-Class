import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  // Header Title Date
  const [pivotDtae, setPivotDtae] = useState(new Date());
  const headerTitle = `${pivotDtae.getFullYear()}년 ${
    pivotDtae.getMonth() + 1
  }월`;
  const onIncreaseMonth = () => {
    setPivotDtae(new Date(pivotDtae.getFullYear(), pivotDtae.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDtae(new Date(pivotDtae.getFullYear(), pivotDtae.getMonth() - 1));
  };
  return (
    <div>
      <Header
        leftChild={
          <Button
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
                strokeWidth={1.5}
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
    </div>
  );
};

export default Home;
