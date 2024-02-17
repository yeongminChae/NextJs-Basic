import Image from "next/image";
import { API_URL } from "../app/(home)/page";

async function getMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

const MovieCredits = async ({ id }: { id: string }) => {
  const credits = await getMovieCredits(id);
  return (
    <div>
      {credits.map((credit) => (
        <div>
          <img src={credit.profile_path} alt={credit.name} />
          <div>
            <h1>{credit.name}</h1>
            <span>
              <h3>{credit.order <= 4 ? "Main" : "Sub"}</h3>
              <h3>{credit.character}</h3>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCredits;
