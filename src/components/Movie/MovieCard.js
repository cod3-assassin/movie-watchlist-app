import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
  editMovie,
} from "../../redux/actions/movieActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faEye,
  faEyeSlash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.css"; // Import your CSS file for styling

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie.id));
  };

  const handleRate = () => {
    const newRating = prompt("Enter rating (out of 5):");
    if (newRating !== null && !isNaN(newRating)) {
      dispatch(rateMovie(movie.id, parseInt(newRating)));
    }
  };

  const handleEdit = () => {
    const editedMovie = { ...movie }; // Copy the current movie object
    // Example: Allow editing of movie title
    const newTitle = prompt("Enter new title:");
    if (newTitle !== null) {
      editedMovie.title = newTitle;
      dispatch(editMovie(editedMovie)); // Dispatch editMovie action with updated movie object
    }
  };

  const handleReview = () => {
    const newReview = prompt("Enter review:");
    if (newReview !== null) {
      dispatch(reviewMovie(movie.id, newReview));
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
        <div className="watch-toggle" onClick={handleToggleWatched}>
          {movie.watched ? (
            <FontAwesomeIcon icon={faEyeSlash} className="watch-icon" />
          ) : (
            <FontAwesomeIcon icon={faEye} className="watch-icon" />
          )}
        </div>
        <div className="icons">
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={handleEdit}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={handleDelete}
          />
        </div>
        <div className="rating">
          {movie.rating !== undefined &&
            Array.from(Array(movie.rating).keys()).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="star-icon"
              />
            ))}
          <FontAwesomeIcon
            icon={faStar}
            className="star-icon"
            onClick={handleRate}
          />
        </div>
      </div>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        {/* Placeholder for review functionality */}
        <button onClick={handleReview} className="button">
          Review
        </button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
