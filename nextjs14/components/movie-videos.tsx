"use client";

import { useEffect, useState } from "react";
import styles from "../styles/movie-videos.module.css";
import ArrowDirection from "./arrow";

async function getVideos(id: string) {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default function MovieVideos({ id }: { id: string }) {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await getVideos(id);
      setVideos(fetchedVideos);
    };

    fetchVideos();
  }, [id]);

  const lastPage = Math.floor(videos.length / 4);

  const increasePage = () => {
    setPage((prev) => (prev === lastPage ? 0 : prev + 1));
  };

  const decreasePage = () => {
    setPage((prev) => (prev === 0 ? lastPage : prev - 1));
  };

  return (
    <div className={styles.container}>
      <ArrowDirection onClick={decreasePage} direction="left" />
      <>
        {videos.length === 0 ? (
          <div className={styles.loadingBox}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={styles.box}>
                <h1>Loading...{i + 1}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.slider}>
            {videos.slice(page * 4, (page + 1) * 4).map((video) => (
              <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                title={video.name}
              />
            ))}
          </div>
        )}
      </>
      <ArrowDirection onClick={increasePage} direction="right" />
    </div>
  );
}
