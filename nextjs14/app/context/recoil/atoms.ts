import { atom } from "recoil";

export const PageAtom = atom({
  key: "page",
  default: 1,
});

export const PaginationAtom = atom({
  key: "pagiPage",
  default: 1,
});
