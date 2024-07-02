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
      id: "1",
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan",
      rating: 5,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/70434815300195.5628f5065b4bd.jpg",
      watched: true,
      review: "Amazing movie with a complex plot.",
    },
    {
      id: "2",
      title: "The Matrix",
      imageUrl:
        "https://www.filmonpaper.com/wp-content/uploads/2011/05/TheMatrix_onesheet_international-1-500x741.jpg",
      description: "A sci-fi classic",
      rating: 4,
      watched: true,
      review: "Great visual effects and story.",
    },
    {
      id: "3",
      title: "Interstellar",
      imageUrl:
        "https://www.behindwoods.com/english-movies/interstellar/images/interstellar-photos-pictures-stills.jpg",
      description: "A journey through space and time",
      rating: 5,
      watched: false,
      review: "Incredible visuals and thought-provoking concepts.",
    },
    {
      id: "4",
      title: "The Shawshank Redemption",
      imageUrl:
        "https://in.originalfilmart.com/cdn/shop/products/shawshank_redemption_1994_netherlands_original_film_art_5000x.jpg?v=1572559869",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 5,
      watched: true,
      review:
        "One of the greatest movies ever made, with brilliant acting and a powerful story.",
    },
    {
      id: "5",
      title: "Pulp Fiction",
      imageUrl: "",
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 5,
      watched: true,
      review:
        "A masterpiece of modern cinema, with unforgettable characters and dialogue.",
    },
    {
      id: "6",
      title: "Forrest Gump",
      imageUrl: "",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      rating: 4,
      watched: true,
      review:
        "Heartwarming and beautifully acted, with a touching story that spans decades.",
    },
    {
      id: "7",
      title: "The Dark Knight",
      imageUrl: "",
      description:
        "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 5,
      watched: true,
      review:
        "A thrilling and dark superhero epic, with Heath Ledger's Joker being unforgettable.",
    },
    {
      id: "8",
      title: "Schindler's List",
      imageUrl: "",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      rating: 5,
      watched: true,
      review:
        "A powerful and emotional portrayal of a true story, highlighting the triumph of humanity over evil.",
    },
    {
      id: "9",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      imageUrl: "",
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      rating: 5,
      watched: true,
      review:
        "An epic fantasy adventure with breathtaking visuals and a captivating story.",
    },
    {
      id: "10",
      title: "Avatar",
      imageUrl: "",
      description:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      rating: 4,
      watched: true,
      review:
        "Revolutionary visual effects and an immersive world make this a must-watch.",
    },
  ],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies,
          { ...action.payload, id: Date.now().toString() },
        ],
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
