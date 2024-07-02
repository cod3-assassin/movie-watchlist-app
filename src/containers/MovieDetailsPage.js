import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../components/Movie/MovieDetails";

const MovieDetailsPage = ({ movieId }) => {
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === movieId)
  );

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details-page">
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
