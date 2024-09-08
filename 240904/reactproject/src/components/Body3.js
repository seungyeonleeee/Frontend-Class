import React, { useState } from "react";

const Body3 = () => {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  // 상태변화관리 !!!
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  // console.log(state);

  const handleOnChange = (e) => {
    console.log("현재 수정 대상 : ", e.target.name);
    console.log("수정값 : ", e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          onChange={handleOnChange}
          value={state.name}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" onChange={handleOnChange} value={state.gender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          type="date"
          onChange={handleOnChange}
          value={state.birth}
        />
      </div>
      <div>
        <textarea name="bio" onChange={handleOnChange} value={state.bio} />
      </div>
    </div>
  );
};

export default Body3;
