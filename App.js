import React, { useState } from 'react';
import Header from './Header';
import Search from './search.js';
import Hero from './Hero.js';
import './Style.css';
import MovieCategory from './Category'
import axios from 'axios';


const App = () => {
  //const [movies, setMovies] = useState([]);
  return (
    <div>
     <Header />
      <Hero />
      <p>Search</p>
      <Search />
    <MovieCategory category='action'/>

    </div>
  );
}

export default App;

