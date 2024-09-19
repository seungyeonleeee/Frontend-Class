// 194 커스텀 훅 만들기, // 195 useContext, // 203 useState, // 205 useEffect
import React, { useState, useContext, useEffect } from "react";
// 209
import { useNavigate } from "react-router-dom";
// 196
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  // 197
  const data = useContext(DiaryStateContext);

  // 204
  const [diary, setDiary] = useState();

  // 210
  const navigate = useNavigate();

  // 206
  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) setDiary(matchDiary);
    else {
      // 208
      alert("일기가 존재하지 않습니다!");
      // 211
      navigate("/");
    }
  }, [id, data]);

  // 198
  // return data;
  // 207
  return diary;
};

export default useDiary;
