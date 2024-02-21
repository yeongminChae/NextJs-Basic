import styles from "../styles/movie-videos.module.css";

interface IArrowDirectionProps {
  onClick: () => void;
  direction: `left` | `right`;
}

const ArrowDirection = ({ onClick, direction }: IArrowDirectionProps) => {
  const isLeft = direction === `left`;
  return (
    <div className={styles.arrowBox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={styles.arrow}
        onClick={onClick}
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
