import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <div id="add-button" className="modal-control"></div>
        <div className="modal">
          <div className="row">
            <div className="col-12 modal-content">
              <h1>Add a movie</h1>
              <Search />
               </div>
            </div>
          </div>
          <div className="modal-overlay"></div>
        <MovieList />
      </div>
    )
  }
}

export default App;