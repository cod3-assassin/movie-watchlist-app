import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/Movie/MovieCard";
import AddEditMovieForm from "../components/Movie/AddEditMovieForm";
import Button from "../components/UI/Button";
import { fetchMoviesSuccess } from "../redux/actions/movieActions";
import { getMovies } from "../services/movieService";

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch movies from the local JSON data
    const moviesData = getMovies();
    dispatch(fetchMoviesSuccess(moviesData));
  }, [dispatch]);

  const handleAddMovie = () => {
    // Toggle form visibility
    setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen);
    setMovieToEdit(null);
  };

  const handleEditMovie = (movieId) => {
    setMovieToEdit(movieId);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="home-page">
      <Button onClick={handleAddMovie}>Add Movie</Button>
      {/* Render Add/Edit Movie Form conditionally */}
      {isFormOpen && (
        <AddEditMovieForm movieId={movieToEdit} closeForm={handleCloseForm} />
      )}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onEdit={handleEditMovie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
