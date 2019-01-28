import React, { Component, Fragment } from 'react';
import FilmList from '../components/FilmList.js';

class FilmInfoContainer extends Component {

  //CONSTRUCTOR
  constructor(props){
    super(props);
    this.state = {
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
  }


  //FUNCTION - RENDER
  render(){
    return (
      <>
      <h1 id="titleBanner"> Upcoming Film Releases For UK </h1>
      <FilmList films={this.state.films} />
      <button id="upcomingButton"><a href="https://www.imdb.com/calendar/?region=gb"> VIEW MORE UPCOMING RELEASES </a></button>
      </>
    )
  }


}

export default FilmInfoContainer;
