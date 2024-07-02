import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/Movie/MovieCard";
import AddEditMovieForm from "../components/Movie/AddEditMovieForm";
import Button from "../components/UI/Button";

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);

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
