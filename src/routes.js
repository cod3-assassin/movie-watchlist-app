import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AddEditMoviePage from "./containers/AddEditMoviePage";
import MovieDetailsPage from "./containers/MovieDetailsPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/add" element={<AddEditMoviePage />} />
      <Route path="/edit/:id" element={<AddEditMoviePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
