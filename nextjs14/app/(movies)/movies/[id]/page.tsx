import { API_URL } from "../../../(home)/page";

export const metadata = {
  title: "Movie",
};

async function getMovie(id: string) {
  console.log(`Fetching movie with id: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching movie with id: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <h1> {movie.title} </h1>
    </div>
  );
}
