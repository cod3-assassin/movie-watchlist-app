import movieData from "../db.json";

// Since movieData is an object with a movies array, extract the movies array
const movies = movieData.movies;

// Function to get all movies
const getMovies = () => {
  return movies;
};

// Function to add a new movie
const addMovie = (newMovie) => {
  const newId = movies.length ? movies[movies.length - 1].id + 1 : 1;
  newMovie.id = newId;
  movies.push(newMovie);
  return newMovie;
};

// Function to edit an existing movie by id
const editMovie = (id, updatedMovie) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies[index] = { ...movies[index], ...updatedMovie };
    return movies[index];
  }
  return null;
};

// Function to delete a movie by id
const deleteMovie = (id) => {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    return movies.splice(index, 1)[0];
  }
  return null;
};

// Function to toggle watched status
const toggleWatched = (id) => {
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    movie.watched = !movie.watched;
    return movie;
  }
  return null;
};

// Function to rate a movie
const rateMovie = (id, rating) => {
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    movie.rating = rating;
    return movie;
  }
  return null;
};

// Function to review a movie
const reviewMovie = (id, review) => {
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    movie.review = review;
    return movie;
  }
  return null;
};

export {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
};
