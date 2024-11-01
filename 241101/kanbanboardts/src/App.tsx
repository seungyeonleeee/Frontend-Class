import React from "react";
import { createGlobalStyle } from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { minuteState, hourSelector } from "./atoms";

const GlobalStyle = createGlobalStyle`
  * reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  /* common */
  body {
    font-family: "Source Sans 3", serif;
  }

`;

const App = () => {
  const hours = useRecoilValue(hourSelector);
  const [minutes, setMinutes] = useRecoilState(minuteState);

  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    // input 태그 무조건 string, minuteState의 default는 number => 앞에 + 붙이면 number
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <input
          value={minutes}
          onChange={onMinutesChange}
          type="number"
          placeholder="Minutes"
        />
        <input value={hours} type="number" placeholder="Hours" />
      </div>
    </>
  );
};

export default App;
