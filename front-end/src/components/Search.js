import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form method="GET" action="/addmovie">
          <input type="text" id="name" name="title" placeholder="Name of Movie" />
            </form>
          <input type="submit" className="search-button" value="Search It..."></input>
      </div>
    );
  }
}

export default Search;