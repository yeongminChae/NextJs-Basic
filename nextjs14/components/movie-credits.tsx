import Image from "next/image";
import { API_URL } from "../app/(home)/page";
import Credit from "./credit";

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

const MovieCredits = async ({ id }: { id: string }) => {
  const credits = await getMovieCredits(id);
  return (
    <>
      <Credit credits={credits} />
    </>
  );
};

export default MovieCredits;
