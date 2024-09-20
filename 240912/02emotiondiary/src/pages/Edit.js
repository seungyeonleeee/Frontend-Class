// 243 useContext
import React, { useContext } from "react";
// 21, // 237 useParams
import { useNavigate, useParams } from "react-router-dom";
// 244 삭제기능 App.js
import { DiaryDispatchContext } from "../App";
// 236
import Header from "../components/Header";
import Button from "../components/Button";
// 239
import useDiary from "../hooks/useDiary";

const Edit = () => {
  // 23
  const navigate = useNavigate();

  // 25
  // const goToDiary = (e) => {
  //   if (e.target === "value") {
  //     navigate("/diary");
  //   } else {
  //     alert("미가입 회원은 다이어리 리뷰 불가");
  //     navigate("/home");
  //   }
  // };

  // 238
  const { id } = useParams();
  // console.log(params); // 동적 파라미터 id값
  // console.log(id);

  // 240
  const data = useDiary(id);
  // console.log(data);

  // 245
  const { onDelete } = useContext(DiaryDispatchContext);
  // console.log(fnc);
  // console.log(onDelete);

  // 246
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate("/");
    }
  };

  // 242
  const goBack = () => {
    navigate(-1);
  };

  // 241 data 잘 가져왔는지 확인
  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    return (
      <div>
        {/* 22 */}
        {/* <Link to={"/diary"}>다이어리 페이지</Link> */}
        {/* 24 */}
        {/* <button onClick={goToDiary}>다이어리 페이지</button> */}
        <div>
          <Header
            leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
            title={"일기 수정하기"}
            rightChild={
              <Button
                text={"삭제하기"}
                type={"negative"}
                onClick={onClickDelete}
              />
            }
          />
        </div>
      </div>
    );
  }
};

export default Edit;
