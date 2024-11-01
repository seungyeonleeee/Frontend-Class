import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  // 자료형을 문자로 바꾸기
}

// type categories = "TODO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSeleter = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if (category === "TODO") {
    //   return toDos.filter((toDo) => toDo.category === "TODO");
    // }
    // if (category === "DOING") {
    //   toDos.filter((toDo) => toDo.category === "DOING");
    // }
    // if (category === "DONE") {
    //   return toDos.filter((toDo) => toDo.category === "DONE");
    // }
    return toDos.filter((toDo) => toDo.category === category);
  },
});
