import React from 'react';
import CityItem from '../city-item/city-item';
import {arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {cityPropTypes} from '../../prop-types/prop-types';

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

const mapStateToProps = (state) => ({
  activeCity: state.city,
  cities: state.cities
});

CityList.propTypes = {
  cities: arrayOf(cityPropTypes.isRequired).isRequired,
  activeCity: cityPropTypes.isRequired
};

export {CityList};
export default connect(mapStateToProps)(CityList);
