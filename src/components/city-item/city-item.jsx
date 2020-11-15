import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {cityPropTypes} from '../../prop-types/prop-types';
import {DEFAULT_SORTING} from '../../store/reducers/user-interface/user-interface';

const CityItem = ({city, setCity, activeClass, setActiveSorting}) => {
  const handleCityClick = (evt) => {
    evt.preventDefault();
    setCity(city);
    setActiveSorting(DEFAULT_SORTING);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass}`}
        href="#"
        onClick={handleCityClick}>
        <span>{city.name}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: cityPropTypes.isRequired,
  setCity: PropTypes.func.isRequired,
  setActiveSorting: PropTypes.func.isRequired,
  activeClass: PropTypes.string
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
  setActiveSorting(sortingName) {
    dispatch(ActionCreator.setActiveSorting(sortingName));
  }
});

export {CityItem};
export default connect(null, mapDispatchToProps)(CityItem);
