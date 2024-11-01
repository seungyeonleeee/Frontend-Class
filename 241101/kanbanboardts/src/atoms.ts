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
});
