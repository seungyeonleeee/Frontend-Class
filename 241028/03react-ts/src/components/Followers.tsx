import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  // Outlet 값 받아오기
  // Outlet으로 값을 받아올 때에는 반드시 부모를 거침, 자식으로 바로 들어갈 때에 업데이트 안됨
  const { nameOfMyUsers } = useOutletContext<FollowersContext>();
  // console.log(nameOfMyUsers);

  return <h1>Here are {nameOfMyUsers}의 Followers</h1>;
};

export default Followers;
