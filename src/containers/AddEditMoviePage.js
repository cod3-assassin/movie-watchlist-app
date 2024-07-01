import React from "react";
import { useDispatch } from "react-redux";
import { addMovie, editMovie } from "../redux/actions/movieActions";
import AddEditMovieForm from "../components/Movie/AddEditMovieForm";
import { useParams, useNavigate } from "react-router-dom";

const AddEditMoviePage = ({ movies }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  const handleSave = (movie) => {
    if (movie.id) {
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }
    navigate("/");
  };

  return (
    <div className="container">
      <h1>{movie ? "Edit Movie" : "Add Movie"}</h1>
      <AddEditMovieForm movie={movie} onSave={handleSave} />
    </div>
  );
};

export default AddEditMoviePage;
