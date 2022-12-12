import React, { useState, useEffect } from "react";

const Search = () => {
const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);

const searchMovies = async (e) => {
e.preventDefault();

if (query === "") {
  return setMovies([]);
}

const url = `http://www.omdbapi.com/?s=${query}&apikey=8bf2d3d7`;

try {
  const res = await fetch(url);
  const data = await res.json();
  setMovies(data.Search);
} catch (err) {
  console.error(err);
}
};

return (
<form onSubmit={searchMovies}>
<input
type="text"
name="query"
placeholder=""
value={query}
onChange={(e) => setQuery(e.target.value)}
id="search"
/>
<div className="movies" style={{ display: "flex", flexWrap: "wrap"}}>
{movies.map((movie) => (
<div className="movie1" key={movie.imdbID}>
<img className="img" src={movie.Poster} alt={movie.Title} />
<h3>{movie.Title}</h3>
</div>
))}
</div>
</form>
);
};

export default Search;


