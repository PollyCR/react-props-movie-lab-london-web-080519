import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends React.Component {
  generateMovieCards = () => {
    return movieData.map(movie => {
      return (
        <MovieCard
        key = {movie.id}
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
        />
      );
    });
  };

  // MovieShowcase.defaultProps = {
  //   title = "Unknown",

  // }

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
