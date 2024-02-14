"use client";

import { useEffect, useState } from "react";

// export const metadata = { // use client에서는 metadata를 사용할 수 없다.
//   title: "Home",
// };

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{!isLoading ? JSON.stringify(movies) : "Loading..."}</div>;
}
