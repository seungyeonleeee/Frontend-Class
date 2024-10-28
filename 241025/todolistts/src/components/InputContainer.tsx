import React, { useState, useContext } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";
import { ToDoListContext } from "../contexts/ToDoContext";

// interface Props {
//   onAdd: (toDo: string) => void;
// }

const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    // onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};

export default InputContainer;
