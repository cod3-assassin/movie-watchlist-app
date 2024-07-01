import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <img
        src={movie.image || "https://via.placeholder.com/300x450"}
        alt={movie.title}
      />
      <div className="content">
        <div className="title">{movie.title}</div>
        <div className="description">{movie.description}</div>
        <div className="release-year">Released: {movie.releaseYear}</div>
        <div className="genre">Genre: {movie.genre}</div>
        <div className="watched">
          {movie.watched ? "Watched" : "Not Watched"}
        </div>
        <div className="rating">Rating: {movie.rating || "Not Rated"}</div>
        <div className="review">{movie.review || "No Review"}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
