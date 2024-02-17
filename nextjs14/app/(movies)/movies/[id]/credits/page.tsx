import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credits";
import { getMovie } from "../../../../../components/movie-infos";
import { iParams } from "../page";

export async function generateMetadata({ params: { id } }: iParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const page = async ({ params: { id } }: iParams) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
};

export default page;
