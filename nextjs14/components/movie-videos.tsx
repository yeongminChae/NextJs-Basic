import styles from "../styles/movie-videos.module.css";
import ArrowDirection from "./arrow";
import Video from "./video";

async function getVideos(id: string) {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const movieVideos = await getVideos(id);
  const lastPage =
    movieVideos.length % 4 == 0
      ? movieVideos.length / 4 - 1
      : Math.floor(movieVideos.length / 4);

  return (
    <div className={styles.container}>
      <ArrowDirection direction="left" lastPage={lastPage} />
      {movieVideos.length != 0 ? (
        <Video movieArray={movieVideos} />
      ) : (
        <span>Oops No Trailers... 😅</span>
      )}
      <ArrowDirection direction="right" lastPage={lastPage} />
    </div>
  );
}

// 671 해리포터
