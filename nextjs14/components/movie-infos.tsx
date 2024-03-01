import Link from "next/link";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
import Image from "next/image";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfos({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <div className={styles.linkBox}>
          <Link href={movie.homepage} target={"_blank"}>
            Homepage &rarr;
          </Link>
          <Link href={`/movies/${id}/credits`}>Cast &rarr;</Link>
        </div>
      </div>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
    </>
  );
}
