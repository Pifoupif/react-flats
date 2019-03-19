import React, { Component } from 'react';
import flats from '../../data/flats.js';

class Flat extends Component {

  render () {
    const src = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/${this.props.selectedFlatId}.jpg`;
    return (
      <div className="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url({src});">
        <div className="card-category">150 EUR</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
