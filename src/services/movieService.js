import axios from "axios";

const getMovies = () => axios.get("/api/movies");
const addMovie = (movie) => axios.post("/api/movies", movie);
const editMovie = (id, movie) => axios.put(`/api/movies/${id}`, movie);
const deleteMovie = (id) => axios.delete(`/api/movies/${id}`);
const toggleWatched = (id, movie) => axios.put(`/api/movies/${id}`, movie);
const rateMovie = (id, rating) => axios.put(`/api/movies/${id}`, { rating });
const reviewMovie = (id, review) => axios.put(`/api/movies/${id}`, { review });

export {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
};
