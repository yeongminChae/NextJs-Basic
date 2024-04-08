"use client";

import Movie from "./movie";
import styles from "../styles/movie-page.module.scss";
import { useRecoilValue } from "recoil";
import { PaginationAtom } from "../app/context/recoil/atoms";

const SimilarMovieContainer = ({ similarMovies }) => {
  const pagination = useRecoilValue(PaginationAtom);

  return (
    <div className={styles.similarMovies}>
      {similarMovies.length != 0 ? (
        similarMovies
          .slice(pagination * 4, (pagination + 1) * 4)
          .map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          ))
      ) : (
        <h1>Oops, No Similar Movies... 😅</h1>
      )}
    </div>
  );
};

export default SimilarMovieContainer;
