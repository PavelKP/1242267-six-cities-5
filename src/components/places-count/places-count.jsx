import React from 'react';
import {connect} from 'react-redux';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';

const PlacesCount = ({filteredOffers, city}) => {
  const measure = filteredOffers.length === 1 ? `place` : `places`;

  return (
    <b className="places__found">{filteredOffers.length} {measure} to stay in {city.name}</b>
  );
};

const mapStateToProps = (state) => ({
  filteredOffers: state.filteredOffers,
  city: state.city
});

PlacesCount.propTypes = {
  filteredOffers: offersPropTypes.offers,
  city: cityPropTypes.isRequired,
};

export {PlacesCount};
export default connect(mapStateToProps)(PlacesCount);
