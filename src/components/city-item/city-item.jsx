import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';

const CityItem = ({city, setCity, activeClass}) => {

  const handleCityClick = (evt) => {
    evt.preventDefault();
    setCity(city);
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

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  }
});

export {CityItem};
export default connect(null, mapDispatchToProps)(CityItem);
