import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { rateMovie, reviewMovie } from "../redux/actions/movieActions";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === parseInt(id))
  );

  const [rating, setRating] = useState(movie.rating || 0);
  const [review, setReview] = useState(movie.review || "");

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    dispatch(rateMovie(movie.id, e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    dispatch(reviewMovie(movie.id, e.target.value));
  };

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <div className="rating">
        <span>Rating:</span>
        <select value={rating} onChange={handleRatingChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="review">
        <span>Review:</span>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Write a review"
          className="input"
        ></textarea>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
