import React from 'react';
import {connect} from 'react-redux';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';

const PlacesCount = ({filteredOffers, city}) => {
  return (
    <b className="places__found">{filteredOffers.length} places to stay in {city.name}</b>
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
