import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetailsPage.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details-page">
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      <p>{movie.description}</p>
      <p>Released: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetailsPage;
