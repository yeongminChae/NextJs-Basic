import { Suspense } from "react";
import MovieInfos, { getMovie } from "../../../../components/movie-infos";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";
import styles from "../../../../styles/movie-page.module.css";

export interface iParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: iParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: iParams) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfos id={id} />
        </Suspense>
      </div>
      <div className={styles.videoSet}>
        <h1>Trailers</h1>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
      <div className={styles.similar}>
        <h1>Similar Movies</h1>
        <Suspense fallback={<h1>Loading movie credits</h1>}>
          <MovieSimilar id={id} />
        </Suspense>
      </div>
    </div>
  );
}
