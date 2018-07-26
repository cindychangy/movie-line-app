import React, { Component } from 'react';
import Movie from './Movie';
import { movies } from '../movies';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.setState({movies});
  }
  render() {
    // const movie = movies[0];
    const movieComponents = movies.map((movie) => (
    <Movie
      key={'movie-' + movie.id}
      title={movie.title}
      poster={movie.poster}
      link1={movie.link1}
      link2={movie.link2}
      link3={movie.link3}
    />
    ));
    return (
      <section id="card-view" className="cards-wrapper">
        <div className="container">
          <div className="row">
              <h1>Your Movie Line</h1>
              {movieComponents}
            </div>
          </div>
      </section>
    )
  }
}

export default MovieList;


