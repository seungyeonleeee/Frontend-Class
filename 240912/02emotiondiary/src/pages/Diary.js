import React from "react";
// 200,  // 221 useNavigate
import { useParams, useNavigate } from "react-router-dom";
// 27
// import { useParams } from "react-router-dom";
// 199
import useDiary from "../hooks/useDiary";
// 215
import Header from "../components/Header";
// 216
import Button from "../components/Button";
// 217
import { getFormattedDate } from "../util";
// 225
import Viewer from "../components/Viewer";

const Diary = () => {
  // 222
  const navigate = useNavigate();

  // 28
  // const params = useParams();
  // console.log(params);

  // 29
  // const { id } = useParams();
  // console.log(id);

  // 201
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();

  // 202
  const data = useDiary(id);
  // 212
  // console.log(data); // 비동기로 파싱하기 때문에 {} 먼저 나옴

  // 213
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    // 223
    const goBack = () => {
      navigate(-1);
    };

    // 224
    const goEdit = () => {
      navigate(`/edit/${id}`);
    };

    // 219
    const { date, emotionId, content } = data;
    // 218
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;

    return (
      // 214
      <div>
        <Header
          leftChild={
            <Button
              text={"< 뒤로가기"}
              // 219
              onClick={goBack}
            />
          }
          itle={title}
          rightChild={
            <Button
              text={"수정하기"}
              // 220
              onClick={goEdit}
            />
          }
        />
        {/* <div>{id}번 일기</div>
        <div>Diary Page</div> */}
        {/* // 226 */}
        <Viewer />
      </div>
    );
  }
};

export default Diary;
