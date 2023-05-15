import React from "react";
import { useParams } from "react-router-dom";
import MovieInfor from "./MovieInfor/MovieInfor";
import ShowTimes from "./ShowTimes/ShowTimes";

function MovieDeatails() {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <MovieInfor movieId={movieId} />
      <ShowTimes movieId={movieId} />
    </div>
  );
}

export default MovieDeatails;
