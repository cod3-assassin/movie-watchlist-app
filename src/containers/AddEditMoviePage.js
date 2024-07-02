import React from "react";
import AddEditMovieForm from "../components/Movie/AddEditMovieForm";

const AddEditMoviePage = () => {
  return (
    <div className="add-edit-movie-page">
      <h1>
        {window.location.pathname.includes("edit") ? "Edit Movie" : "Add Movie"}
      </h1>
      <AddEditMovieForm />
    </div>
  );
};

export default AddEditMoviePage;
