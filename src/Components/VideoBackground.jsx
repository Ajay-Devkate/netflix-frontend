import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId}) => {

  const trailerKey = useSelector(store=>store.movie?.trailerMovie?.key);
  
  
  useMovieById(movieId);
  return (
    <div className="w-[vw] aspect-video text-white ">
      <iframe
      className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey || "1234"}?si=xcJtL7QggTI&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
