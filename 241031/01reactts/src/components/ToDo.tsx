import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

const Container = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #999;
  }
`;

// mango의 값을 gam으로
const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];
const target = 1;
const first = food.slice(0, target);
const back = food.slice(target + 1);
const final = [...food.slice(0, target), "gam", ...food.slice(target + 1)];

const ToDo = ({ id, text, category }: IToDo) => {
  const setTodos = useSetRecoilState(toDoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const target = e.target as HTMLButtonElement;
    const {
      currentTarget: { name },
    } = e;

    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((it) => it.id === id);
      // const oldToDo = oldTodos[targetIndex];
      // const target = oldTodos.find((it) => it.id === id);
      const newToDo = { id, text, category: name as any };

      return [
        ...oldTodos.slice(0, targetIndex),
        newToDo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };

  // [
  //   {
  //     id: 1730427258083,
  //     text: "aaaaa",
  //     category: "TODO",
  //   },
  //   {
  //     id: 1730427162894,
  //     text: "aa",
  //     category: "TODO",
  //   },
  // ];

  return (
    <Container>
      <span>{text}</span>
      <BtnGroup>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO} onClick={onClick}>
            ToDo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
        {/* Categories.TODO : 숫자 => 형변환 필요 */}

        {/* <Button>Doing</Button>
        <Button>Done</Button> */}
      </BtnGroup>
    </Container>
  );
};

export default ToDo;
