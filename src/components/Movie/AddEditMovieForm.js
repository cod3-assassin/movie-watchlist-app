import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addMovie, editMovie } from "../../redux/actions/movieActions";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "../../styles/form.css"; // Assuming you have a separate CSS file for form styling

const AddEditMovieForm = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies || []);
  const movie = movies.find((m) => m.id === movieId);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseYear: "",
    genre: "",
    imageUrl: "",
    rating: 0,
    watched: false,
    review: "",
  });

  useEffect(() => {
    if (movieId && movie) {
      setFormData({
        title: movie.title || "",
        description: movie.description || "",
        releaseYear: movie.releaseYear || "",
        genre: movie.genre || "",
        imageUrl: movie.imageUrl || "",
        rating: movie.rating || 0,
        watched: movie.watched || false,
        review: movie.review || "",
      });
    }
  }, [movieId, movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieId) {
      const updatedMovie = {
        id: movieId,
        ...formData,
      };
      dispatch(editMovie(updatedMovie));
    } else {
      dispatch(addMovie(formData));
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="form-input"
      />
      <Input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="form-input"
      />
      <Input
        name="releaseYear"
        value={formData.releaseYear}
        onChange={handleChange}
        placeholder="Release Year"
        type="number"
        min="1900"
        max="2099"
        className="form-input"
      />
      <Input
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Genre"
        className="form-input"
      />
      <Input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="form-input"
      />
      <Input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        className="form-input"
      />
      <div className="form-checkbox">
        <input
          type="checkbox"
          id="watched"
          name="watched"
          checked={formData.watched}
          onChange={handleCheckboxChange}
          className="form-checkbox-input"
        />
        <label htmlFor="watched" className="form-checkbox-label">
          Watched
        </label>
      </div>
      <Input
        name="review"
        value={formData.review}
        onChange={handleChange}
        placeholder="Review"
        className="form-input"
      />
      <Button type="submit" className="form-button">
        {movieId ? "Update Movie" : "Add Movie"}
      </Button>
    </form>
  );
};

export default AddEditMovieForm;
