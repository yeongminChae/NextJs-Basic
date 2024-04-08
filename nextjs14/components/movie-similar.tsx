import { API_URL } from "../app/(home)/page";
import PaginationSimilarMovie from "./paginationSimilarMovie";
import SimilarMovieContainer from "./similarMovieContainer";
import styles from "../styles/movie-page.module.scss";

const getMovieSimilar = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return await response.json();
};

const MovieSimilar = async ({ id }: { id: string }) => {
  const similarMovies = await getMovieSimilar(id);

  return (
    <div className={styles.similarMovie}>
      <SimilarMovieContainer similarMovies={similarMovies} />
      <PaginationSimilarMovie similarMovies={similarMovies} id={id} />
    </div>
  );
};

export default MovieSimilar;
