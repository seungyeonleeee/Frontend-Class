import React from "react";
// 21
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  // 23
  const navigate = useNavigate();

  // 25
  const goToDiary = (e) => {
    if (e.target === "value") {
      navigate("/diary");
    } else {
      alert("미가입 회원은 다이어리 리뷰 불가");
      navigate("/home");
    }
  };

  return (
    <div>
      Edit Page
      {/* 22 */}
      {/* <Link to={"/diary"}>다이어리 페이지</Link> */}
      {/* 24 */}
      <button onClick={goToDiary}>다이어리 페이지</button>
    </div>
  );
};

export default Edit;
