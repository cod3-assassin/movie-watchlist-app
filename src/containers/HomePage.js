import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/Movie/MovieCard";
import "./HomePage.css";

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="home-page">
      <h1>Movie Watchlist</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
