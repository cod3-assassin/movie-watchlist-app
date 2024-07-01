import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteMovie, toggleWatched } from "../redux/actions/movieActions";
import MovieCard from "../components/Movie/MovieCard";

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies); // Accessing movies array from state
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation

  if (!movies || movies.length === 0) {
    return <div className="container">No movies found.</div>;
  }

  const handleEdit = (movie) => {
    navigate(`/edit/${movie.id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched(id));
  };

  const handleAddMovie = () => {
    navigate("/add");
  };

  return (
    <div className="container">
      <h1>Movie Watchlist</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieCard
              movie={movie}
              onEdit={() => handleEdit(movie)}
              onDelete={() => handleDelete(movie.id)}
              onToggleWatched={() => handleToggleWatched(movie.id)}
            />
          </div>
        ))}
      </div>
      <button className="button" onClick={handleAddMovie}>
        Add Movie
      </button>
    </div>
  );
};

export default HomePage;
