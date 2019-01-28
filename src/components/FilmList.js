import React, { Component, Fragment } from 'react';
import FilmItem from './FilmItem.js';

class FilmList extends Component {

  //FUNCTION - RENDER
  render() {
    const filmItems = this.props.films.map((film, index) => {
      return (
        <FilmItem
        key={index}
        url={film.url}
        >
        {film.name}
        </FilmItem>

      )
    });

    return (
      <>
      { filmItems }
      </>
    )
  }
}


export default FilmList;
