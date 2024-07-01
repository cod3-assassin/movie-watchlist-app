// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AddEditMoviePage from "./containers/AddEditMoviePage";
import MovieDetailsPage from "./containers/MovieDetailsPage";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/add" element={<AddEditMoviePage />} />
    <Route path="/edit/:id" element={<AddEditMoviePage />} />
    <Route path="/movie/:id" element={<MovieDetailsPage />} />
  </Routes>
);

export default AppRoutes;
