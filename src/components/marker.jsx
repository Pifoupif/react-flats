import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MyMarker = ({ text }) => <div>{text}</div>;

class Marker extends Component {
  static defaultProps = {
    center: {
      lng: 2.34689,
      lat: 48.884211
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCEqVwDSwCD27SXB29u0JL3hcvEZ8jBlOA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.884211}
            lng={2.34689}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }

}

export default Marker;
