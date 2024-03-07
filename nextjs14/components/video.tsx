"use client";

import { PageAtom } from "../app/context/recoil/atoms";
import { useRecoilValue } from "recoil";

const Video = ({ movieArray }) => {
  const page = useRecoilValue(PageAtom);

  return (
    <>
      {(movieArray.length >= 4
        ? movieArray.slice(page * 4, (page + 1) * 4)
        : movieArray
      ).map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
        />
      ))}
    </>
  );
};

export default Video;
