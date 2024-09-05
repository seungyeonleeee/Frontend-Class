import "./App.css";

// useState, useEffect
import { useState, useEffect, useRef } from "react";

import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

// 14
import Even from "./components/Even";

function App() {
  // 1
  // useState
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  // 4
  const [text, setText] = useState("");

  // 8
  const didMountRef = useRef(false);

  // 2
  // useEffect
  // 2개의 인자값 1.콜백함수, 2. 의존성 배열
  // 콜백이 뒤에 붙은 배열에 의존한다

  // useEffect(() => { //6 text추가
  //   console.log("업데이트 : ", count, text);
  // }, [count, text]);

  // count의 값이 변화가 되면 앞에 콜백함수가 실행되라
  // 리액트는 가상돔에서 움직이기 때문에 기본 데이터를 무조건 다 읽음
  // 가상돔 출력 행위 자체가 count 실행
  // 의존성 배열에 state값이 들어오면 state값이 변화되면 콜백함수 실행

  // 7
  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });
  // 의존성 배열에 어떠한 값도 정의 되지 않으면 렌더링이 되면 무조건 실행
  // 마운팅 : 브라우저가 컴포넌트를 최초로 읽을 때
  // 렌더링 : 업데이트

  // 9
  useEffect(() => {
    if (!didMountRef.current) didMountRef.current = true;
    else console.log("컴포넌트 업데이트");
  });

  // 10
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // // 11 언마운트
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   // 12
  //   // useEffect에서 return은 언마운트 정의할 때만 씀
  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalID);
  //   };
  // });

  // 3
  const handleChangeText = (e) => {
    // 5
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {
          //15 단락회로평가 AND단락평가
          count % 2 === 0 && <Even />
        }
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
