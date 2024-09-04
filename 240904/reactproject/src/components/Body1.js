import { useState } from "react";

const Body1 = () => {
  // const handleOnClick = (e) => {
  //   // alert("많이 피곤하시죠!");

  //   console.log(e.target.name);
  // };

  // const [count, setCount] = useState(0);
  // const onIcrease = () => {
  //   setCount(count + 1);
  // };

  // const [text, setText] = useState("");
  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };

  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   setDate(e.target.value);
  // };

  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값", e.target.value);
  //   setOption(e.target.value);
  // };

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값", e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      {/* <button onClick={handleOnClick}>클릭하세요</button> */}

      {/* <button name="A버튼" onClick={handleOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B버튼
      </button> */}

      {/* <h2>{count}</h2>
      <button onClick={onIcrease}>+</button> */}

      {/* <input onChange={handleOnChange} />
      <div>{text}</div> */}

      {/* <input type="date" onChange={handleOnChange} value={date} /> */}

      {/* <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select> */}

      <textarea value={text} onChange={handleOnChange} />
    </div>
  );
};

export default Body1;
