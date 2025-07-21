import React from "react";
import { CDN_IMG_PATH } from "../utils/Constants";

const MovieCard = ({ title, moviesList }) => {
  return (
    <div className="pl-12 ">
      <div className="py-2 text-xl font-bold">{title}</div>
      {moviesList && <div className="flex overflow-x-scroll ">
        {moviesList?.map((item) => {
          return <img className="w-36 pr-2" alt={title} src={CDN_IMG_PATH + item.poster_path} />
        })}
      </div>}
    </div>
  );
};

export default MovieCard;
