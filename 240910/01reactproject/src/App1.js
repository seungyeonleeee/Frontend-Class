import "./App.css";
import { useState } from "react";

function App1() {
  const [count, setCount] = useState(0);
  console.log(count);

  const plus = () => {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3); // 가장 마지막 코드를 읽음 (callstack)

    setCount((count) => count + 1);
    setCount((count) => count + 2);
    setCount((count) => count + 3); // (queue)

    console.log(count);
    // 동시 작동
  };

  const minus = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App1;
