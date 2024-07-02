import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteMovie,
  toggleWatched,
  rateMovie,
} from "../../redux/actions/movieActions";
import { FaEdit, FaTrash, FaStar, FaEye, FaEyeSlash } from "react-icons/fa";
import "../../styles/card.css";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie.id));
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleStarClick = (rating) => {
    dispatch(rateMovie(movie.id, rating));
  };

  return (
    <div className="card">
      <div className="star-container">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className="star-icon"
            style={{
              color: index + 1 <= movie.rating ? "#ffc107" : "#e4e5e9",
            }}
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </div>
      <div className="card-image-container">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="card-image"
          onClick={toggleDescription}
        />
      </div>
      {showDescription && (
        <div className="card-description">
          <p>{movie.description}</p>
        </div>
      )}
      {!showDescription && (
        <div className="card-details">
          <div className="card-content">
            <div className="card-header">
              <h3>{movie.title}</h3>
              <div className="card-actions">
                <Link to={`/edit/${movie.id}`} className="action-icon">
                  <FaEdit />
                </Link>
                <FaTrash className="action-icon" onClick={handleDelete} />
              </div>
            </div>
            <div className="card-details-footer">
              <div className="details-footer-left">
                <span>{movie.genre}</span>
                <span>{movie.releaseYear}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="card-actions-top">
        <div className="watch-icon-container">
          {movie.watched ? (
            <FaEyeSlash className="watch-icon" onClick={handleToggleWatched} />
          ) : (
            <FaEye className="watch-icon" onClick={handleToggleWatched} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
