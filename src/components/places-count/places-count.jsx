import React from 'react';
import {connect} from 'react-redux';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';

const PlacesCount = ({offersFiltered, city}) => {
  const measure = offersFiltered.length === 1 ? `place` : `places`;

  return (
    <b className="places__found">{offersFiltered.length} {measure} to stay in {city.name}</b>
  );
};

PlacesCount.propTypes = {
  offersFiltered: offersPropTypes.offers,
  city: cityPropTypes.isRequired,
};

const mapStateToProps = ({INTERFACE}) => ({
  city: INTERFACE.city
});

export {PlacesCount};
export default connect(mapStateToProps)(PlacesCount);
