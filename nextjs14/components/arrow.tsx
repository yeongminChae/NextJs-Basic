"use client";

import styles from "../styles/movie-videos.module.css";
import { useSetRecoilState } from "recoil";
import { PageAtom } from "../app/context/recoil/atoms";

interface IArrowDirectionProps {
  direction: `left` | `right`;
  lastPage: number;
}

const ArrowDirection = ({ direction, lastPage }: IArrowDirectionProps) => {
  const isLeft = direction === `left`;
  const setPageAtom = useSetRecoilState(PageAtom);

  const increasePage = () => {
    setPageAtom((prev) => (prev === lastPage ? 0 : prev + 1));
  };

  const decreasePage = () => {
    setPageAtom((prev) => (prev === 0 ? lastPage : prev - 1));
  };

  return (
    <div className={styles.arrowBox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={styles.arrow}
        onClick={isLeft ? decreasePage : increasePage}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            isLeft
              ? "m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              : "m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          }
        />
      </svg>
    </div>
  );
};

export default ArrowDirection;
