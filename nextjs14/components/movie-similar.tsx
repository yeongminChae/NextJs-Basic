import { API_URL } from "../app/(home)/page";
import PaginationSimilarMovie from "./paginationSimilarMovie";
import SimilarMovieContainer from "./similarMovieContainer";

const getMovieSimilar = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return await response.json();
};

const MovieSimilar = async ({ id }: { id: string }) => {
  const similarMovies = await getMovieSimilar(id);

  return (
    <div>
      <PaginationSimilarMovie similarMovies={similarMovies} id={id} />
      <SimilarMovieContainer similarMovies={similarMovies} />
    </div>
  );
};

export default MovieSimilar;
