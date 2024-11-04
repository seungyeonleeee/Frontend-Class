import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: ["포폴 준비하기", "리액트 복습하기"],
    Doing: ["노드JS 공부하기"],
    Done: ["자바스크립트 공부", "밥먹기"],
  },
});
