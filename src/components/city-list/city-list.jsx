import React from 'react';
import CityItem from '../city-item/city-item';

const CityList = ({cities}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <CityItem city={city} key={`city-${i}`}/>)}
      </ul>
    </section>
  );
};

export default CityList;
