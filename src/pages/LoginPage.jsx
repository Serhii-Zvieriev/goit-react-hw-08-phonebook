// import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";

// import MoviesList from "../components/MoviesList/MoviesList";
// import * as fetchMovie from "../services/themoviedb-api";

import "./pageStyles.css";

export default function LoginPage() {
  // const [inputValue, setInputValue] = useState("");
  // const [movies, setMovies] = useState(null);
  // const history = useHistory();
  // const location = useLocation();

  // const searchQueary = new URLSearchParams(location.search).get("query");

  // useEffect(() => {
  //   if (searchQueary) {
  //     fetchMovie
  //       .fetchSearchMovie(searchQueary)
  //       .then(({ results }) => setMovies(results));
  //     setInputValue(searchQueary);
  //   }
  // }, [searchQueary]);

  // const handleChange = ({ target }) => {
  //   setInputValue(target.value.toLowerCase());
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if (inputValue.trim()) {
  //     fetchMovie
  //       .fetchSearchMovie(inputValue)
  //       .then(({ results }) => setMovies(results));

  //     history.push({ ...history.location, search: `?query=${inputValue}` });
  //   } else {
  //     alert("Введите корректное название фильма");
  //   }
  // };

  return (
    <>
      {/* <form onSubmit={onSubmit}>
        <input
          className="input"
          name="inputValue"
          value={inputValue}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button className="btn" type="submit">
          <span>Search</span>
        </button>
      </form>

      <MoviesList movies={movies} /> */}
      LoginPage
    </>
  );
}
