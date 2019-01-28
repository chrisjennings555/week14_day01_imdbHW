import React, { Component, Fragment } from 'react';

class FilmItem extends Component {

  //FUNCTION - RENDER
  render(){
    return (
      <>
      <ul>
      <li id="filmList"><a href={this.props.url}>{this.props.children}</a></li>
      </ul>
      </>
    )
  }

}

export default FilmItem;
