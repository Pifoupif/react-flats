import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatsList from './flats_list.jsx';
import Marker from './marker.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlatId: "flat1",
      selectedFlatMarker: { lng: 2.34689, lat: 48.884211 }
    };
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatsList flats={this.state.flats}/>
        </div>
        <div className="map-container">
          <Marker lng={this.state.selectedFlatMarker.lng} lat={this.state.selectedFlatMarker.lat} />
        </div>

      </div>
    )

  }

}

export default App;
