import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = ({ movieId }) => {
    useMovieVideo(movieId);
    const trailerKey = useSelector(store => store.movies.trailerId?.key)
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerKey +"?autoplay=1&mute=1" }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
