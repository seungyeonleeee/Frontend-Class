// Recoil atom 관리 컴포넌트
import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

// selector : atom의 state를 제어, 편집
export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    // console.log(newValue);
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
// set(세팅할 대상, 어떻게 세팅할 것 인지)
