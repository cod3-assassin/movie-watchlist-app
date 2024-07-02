import React from "react";
import Rating from "../UI/Rating";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <p>{movie.watched ? "Watched" : "Unwatched"}</p>
      <Rating rating={movie.rating} />
      <p>Review: {movie.review}</p>
    </div>
  );
};

export default MovieDetails;
