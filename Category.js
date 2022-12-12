import React from 'react';
import axios from 'axios';

const API_KEY = '8bf2d3d7';

class MovieCategory extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.props.category}`)
      .then(response => {
        this.setState({
          movies: response.data.Search,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="movie-category">
        {this.state.movies.map(movie => (
          <div className="movie" key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    );
  }
}




export default MovieCategory;