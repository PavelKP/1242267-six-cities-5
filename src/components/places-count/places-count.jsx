import React from 'react';
import {connect} from 'react-redux';

const PlacesCount = ({placesCount, city}) => {
  return (
    <b className="places__found">{placesCount} places to stay in {city}</b>
  );
};

const mapStateToProps = (state) => ({
  placesCount: state.placesCount,
  city: state.city
});

export {PlacesCount};
export default connect(mapStateToProps)(PlacesCount);
