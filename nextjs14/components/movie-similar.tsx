import { API_URL } from "../app/(home)/page";
import Movie from "./movie";
import styles from "../styles/home.module.css";

const getMovieSimilar = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return await response.json();
};

const MovieSimilar = async ({ id }: { id: string }) => {
  const similarMovies = await getMovieSimilar(id);

  return (
    <div>
      {similarMovies.map((movie) => (
        <div className={styles.container}>
          {similarMovies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieSimilar;
