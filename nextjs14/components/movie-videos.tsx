import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching movie with id: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return <h6>{JSON.stringify(video)}</h6>;
  //   return (
  //     <div>
  //       {videos.map((video: any) => (
  //         <div key={video.id}>
  //           <h3>{video.name}</h3>
  //           <p>{video.type}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
}
