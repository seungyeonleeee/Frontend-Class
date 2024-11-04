import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const GlobalStyle = createGlobalStyle`
  /* reset */
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
    background:  ${({ theme }) => theme.bgColor};
    color: #000;
  }

`;
const Wrapper = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const App = () => {
  // toDoState
  const [toDos, setToDos] = useRecoilState(toDoState);

  // Drag가 끝났을 때 실행시킬 함수
  const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
    // console.log("D&D Finished");
    // console.log(args);
    // 최종결과값을 매개변수로 찾아올 수 있음
    // destination : 목적지
    // source : 고향
    // draggableId : 이동한 대상
    // console.log(destination, source, draggableId);

    // if (!destination) return;
    // setToDos((oldToDos) => {
    //   // oldToDos : 원래 있었던 배열
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination.index, 0, draggableId);
    //   return copyToDos;
    // });
    // // setToDos는 배열로 반환되어야 됨

    // console.log(info);
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        // console.log(boardCopy);

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);

        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const destinationBoard = [...oldToDos[destination?.droppableId]];

        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, draggableId);

        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {/* 객체인 toDos를 key값만 뽑아 배열로 만듦 */}
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default App;
