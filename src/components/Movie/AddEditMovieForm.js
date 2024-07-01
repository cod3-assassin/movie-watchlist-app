import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addMovie, editMovie } from "../../redux/actions/movieActions";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Rating from "../UI/Rating";
import "./AddEditMovieForm.css";

const AddEditMovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id === parseInt(id));

  const [title, setTitle] = useState(movie ? movie.title : "");
  const [description, setDescription] = useState(
    movie ? movie.description : ""
  );
  const [releaseYear, setReleaseYear] = useState(
    movie ? movie.releaseYear : ""
  );
  const [genre, setGenre] = useState(movie ? movie.genre : "");
  const [rating, setRating] = useState(movie ? movie.rating : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: movie ? movie.id : Date.now(),
      title,
      description,
      releaseYear,
      genre,
      rating,
      watched: movie ? movie.watched : false,
    };

    if (movie) {
      dispatch(editMovie(newMovie));
    } else {
      dispatch(addMovie(newMovie));
    }

    navigate("/");
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        label="Release Year"
        type="number"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <Input
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Rating value={rating} onChange={setRating} />
      <Button type="submit">{movie ? "Update Movie" : "Add Movie"}</Button>
    </form>
  );
};

export default AddEditMovieForm;
