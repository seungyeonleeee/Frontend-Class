import React, { useState } from "react";

const Body2 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} value={name} placeholder="이름" />
      </div>
      <div>
        <select onChange={onChangeGender} value={gender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" onChange={onChangeBirth} value={birth} />
      </div>
      <div>
        <textarea onChange={onChangeBio} value={bio} />
      </div>
    </div>
  );
};

export default Body2;
