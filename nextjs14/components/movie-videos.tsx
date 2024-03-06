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
  const lastPage = Math.floor(movieVideos.length / 4);

  return (
    <div className={styles.container}>
      <ArrowDirection direction="left" lastPage={lastPage} />
      <Video movieArray={movieVideos} />
      <ArrowDirection direction="right" lastPage={lastPage} />
    </div>
  );
}
