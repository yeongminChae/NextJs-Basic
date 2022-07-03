import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "3b45f9cc2e4aedf5c5acc1163b12b24c";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
    // async is annominous function , and this function has to be excuted immediately so i called the function with '()'
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title} </h4>
        </div>
      ))}
    </div>
  );
}
