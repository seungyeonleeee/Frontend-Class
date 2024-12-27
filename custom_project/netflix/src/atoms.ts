import { atom } from "recoil";

interface ModalState {
  movieId: number | null;
  data: any | null;
}

export const isModalAtom = atom<ModalState>({
  key: "modalState",
  default: {
    movieId: null,
    data: null,
  },
});
