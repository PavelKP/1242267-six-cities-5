import React from 'react';
import {connect} from 'react-redux';

const PlacesCount = ({filteredOffers, city}) => {
  return (
    <b className="places__found">{filteredOffers.length} places to stay in {city.name}</b>
  );
};

const mapStateToProps = (state) => ({
  filteredOffers: state.filteredOffers,
  city: state.city
});

export {PlacesCount};
export default connect(mapStateToProps)(PlacesCount);
