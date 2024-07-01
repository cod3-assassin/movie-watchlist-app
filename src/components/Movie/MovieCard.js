import React from "react";

const MovieCard = ({ movie, onEdit, onDelete, onToggleWatched }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.image || "https://via.placeholder.com/300x450"}
        alt={movie.title}
      />
      <div className="content">
        <div className="title">{movie.title}</div>
        <div className="description">{movie.description}</div>
        <div className="actions">
          <button className="button" onClick={() => onEdit(movie)}>
            Edit
          </button>
          <button className="button" onClick={() => onDelete(movie.id)}>
            Delete
          </button>
          <button className="button" onClick={() => onToggleWatched(movie.id)}>
            {movie.watched ? "Unwatch" : "Watch"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
