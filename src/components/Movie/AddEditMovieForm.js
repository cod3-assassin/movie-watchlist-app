import React, { useState } from "react";

const AddEditMovieForm = ({ movie, onSave }) => {
  const [title, setTitle] = useState(movie ? movie.title : "");
  const [description, setDescription] = useState(
    movie ? movie.description : ""
  );
  const [releaseYear, setReleaseYear] = useState(
    movie ? movie.releaseYear : ""
  );
  const [genre, setGenre] = useState(movie ? movie.genre : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      ...movie,
      title,
      description,
      releaseYear,
      genre,
    };
    onSave(updatedMovie);
  };

  return (
    <form onSubmit={handleSubmit} className="add-edit-movie-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Release Year</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <button type="submit" className="button">
        Save
      </button>
    </form>
  );
};

export default AddEditMovieForm;
