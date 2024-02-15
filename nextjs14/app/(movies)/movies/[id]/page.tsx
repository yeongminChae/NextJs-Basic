import { Suspense } from "react";
import MovieInfos, { getMovie } from "../../../../components/movie-infos";
import MovieVideos from "../../../../components/movie-videos";

interface iParams {
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
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
