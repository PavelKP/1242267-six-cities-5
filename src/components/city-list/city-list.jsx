import React from 'react';
import CityItem from '../city-item/city-item';
import {connect} from 'react-redux';


const CityList = ({cities, activeCity}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <CityItem
          activeClass={city === activeCity && `tabs__item--active`}
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

export {CityList};
export default connect(mapStateToProps, null)(CityList);
