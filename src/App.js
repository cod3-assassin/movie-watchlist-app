import React from "react";
import Routes from "./routes";
import { FaFilm } from "react-icons/fa";
import "./styles/headerFooter.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <FaFilm className="logo-icon" />
            <h1>Movie Watchlist</h1>
          </div>
        </div>
      </header>

      <Routes />

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 Movie Watchlist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
