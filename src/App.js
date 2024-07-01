// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <div className="header">
        <h1>Movie Watchlist</h1>
      </div>
      <Routes />
    </Router>
  );
};

export default App;
