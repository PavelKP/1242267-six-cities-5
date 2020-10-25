import React from 'react';
import {connect} from 'react-redux';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';

const PlacesCount = ({offersFiltered, city}) => {
  const measure = offersFiltered.length === 1 ? `place` : `places`;

  return (
    <b className="places__found">{offersFiltered.length} {measure} to stay in {city.name}</b>
  );
};

const mapStateToProps = (state) => ({
  city: state.city
});

PlacesCount.propTypes = {
  offersFiltered: offersPropTypes.offers,
  city: cityPropTypes.isRequired,
};

export {PlacesCount};
export default connect(mapStateToProps)(PlacesCount);
