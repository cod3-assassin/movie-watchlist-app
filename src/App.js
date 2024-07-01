import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes";
import "./styles/global.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="header">
        <h1>Movie Watchlist</h1>
      </div>
      <Routes />
    </Provider>
  );
};

export default App;
