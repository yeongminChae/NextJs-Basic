import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfos from "../../../../components/movie-infos";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
  title: "Movie",
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
