import React from 'react';
import CityItem from '../city-item/city-item';
import {arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {cityPropTypes} from '../../prop-types/prop-types';

const UNDEFINED_CITY = `City is undefined`;

const CityList = ({cities, activeCity}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <CityItem
          activeClass={city.name === activeCity.name ? `tabs__item--active` : ``}
          city={city}
          key={`city-${i}`}/>)}
      </ul>
    </section>
  );
};

CityList.propTypes = {
  cities: arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: cityPropTypes.isRequired
};

const mapStateToProps = ({DATA, INTERFACE}) => ({
  activeCity: INTERFACE.city,
  cities: DATA.cities
});

CityList.defaultProps = {
  cities: [{
    name: UNDEFINED_CITY,
    coordinates: [0.0, 0.0],
    zoom: 12,
  }]
};

export {CityList};
export default connect(mapStateToProps)(CityList);
