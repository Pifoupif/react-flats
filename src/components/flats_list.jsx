import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatsList = (props) => {
  return (
    <div className="flats-list">
      {props.flats.map(flat => <Flat id={flat.selectedFlatId} key={flat.selectedFlatId} />)};
    </div>

  );
};

export default FlatsList;
