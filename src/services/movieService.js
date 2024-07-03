import axios from "axios";

const API_URL = "/api/movies";

const getMovies = () => axios.get(API_URL);
const addMovie = (movie) => axios.post(API_URL, movie);
const editMovie = (id, movie) => axios.put(`${API_URL}/${id}`, movie);
const deleteMovie = (id) => axios.delete(`${API_URL}/${id}`);
const toggleWatched = (id, movie) => axios.put(`${API_URL}/${id}`, movie);
const rateMovie = (id, rating) => axios.put(`${API_URL}/${id}`, { rating });
const reviewMovie = (id, review) => axios.put(`${API_URL}/${id}`, { review });

export {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
};
