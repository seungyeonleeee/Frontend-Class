import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "./db";

const User = () => {
  // useParams
  const { userId } = useParams();
  // console.log(userId);

  return (
    <>
      <h1>
        User with ID {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      {/* 
        상대경로 "followers" : 부모 요소가 가지고 있는 경로를 그대로 흡수
        절대경로 "/followers" : 부모 요소가 가지고 있는 경로 무시
      */}
      {/* props를쓰지않고 Outlet을 통해 자식요소에게 값을 내려주기 */}
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
