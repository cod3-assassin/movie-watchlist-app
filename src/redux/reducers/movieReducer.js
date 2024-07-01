import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  TOGGLE_WATCHED,
  RATE_MOVIE,
  REVIEW_MOVIE,
} from "../actions/movieActions";

const initialState = {
  movies: [
    {
      id: 1,
      posterUrl:
        "https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/05/IMG_3061-2-scaled.jpeg",
      title: "Dummy Movie 1",
      watched: false,
    },
    {
      id: 2,
      posterUrl:
        "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg",
      title: "Dummy Movie 2",
      watched: true,
    },
    {
      id: 3,
      posterUrl:
        "https://www.movieposters.com/cdn/shop/files/scan003_d4dd81a7-9702-43f4-b4a4-2672d9a681bd_480x.progressive.jpg?v=1719591650",
      title: "Dummy Movie 3",
      watched: false,
    },
    {
      id: 4,
      posterUrl:
        "https://www.movieposters.com/cdn/shop/files/alien_romulus_240x360_crop_center.progressive.jpg?v=1712854636",
      title: "Dummy Movie 4",
      watched: true,
    },
    {
      id: 5,
      posterUrl:
        "https://www.movieposters.com/cdn/shop/files/wild_robot_ver2_480x.progressive.jpg?v=1718830597",
      title: "Dummy Movie 5",
      watched: false,
    },
    {
      id: 6,
      posterUrl:
        "https://www.movieposters.com/cdn/shop/products/54440_480x.progressive.jpg?v=1646167720",
      title: "Dummy Movie 6",
      watched: true,
    },
    {
      id: 7,
      posterUrl:
        "https://www.movieposters.com/cdn/shop/files/fly_me_to_the_moon_480x.progressive.jpg?v=1715958334",
      title: "Dummy Movie 6",
      watched: true,
    },
    {
      id: 8,
      posterUrl:
        "https://www.movieposters.com/cdn/shop/files/scan_69e09736-d545-4a36-932d-dd7830135092_480x.progressive.jpg?v=1714419581",
      title: "Dummy Movie 6",
      watched: true,
    },
    // Add more dummy movies as needed
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case TOGGLE_WATCHED:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, watched: !movie.watched }
            : movie
        ),
      };
    case RATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, rating: action.payload.rating }
            : movie
        ),
      };
    case REVIEW_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, review: action.payload.review }
            : movie
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
