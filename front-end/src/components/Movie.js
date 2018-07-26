import React, { Component } from 'react';
import playButton from './../img/button-play.svg';

class Movie extends Component {
  render() {
    return (
			<div className="col-3 card">
        <div className="card__poster" style={{ backgroundImage: `url(${this.props.poster})` }} />
        <div className="card__content">
					<div className="left">
						<h2>{this.props.title}</h2>
					</div>
					<div className="right">
            <span className="play-button"><img src={playButton}/></span>
					</div>
					<div className="bottom">
          <ul>
            <li><a href={this.props.link1} target="_blank">Link 1</a></li>
            <li><a href={this.props.link1} target="_blank">Link 1</a></li>
            <li><a href={this.props.link1} target="_blank">Link 1</a></li>
          </ul>
          <p>REMOVE</p>
					</div>
				</div>
			</div>
		);
  }
}

export default Movie;
