import React from 'react';
import {Link} from 'react-router-dom';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import Header from '../header/header';
import CityList from '../city-list/city-list';
import PlacesCount from '../places-count/places-count';
import SortingTypes from '../sorting-types/sorting-types';
import {CardType} from '../../const';
import {connect} from 'react-redux';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';

const Main = ({offers, city}) => {

  const offersFiltered = offers.filter((offer) => offer.location === city.name);

  return (
    <div className="page page--gray page--main">
      <Header>
        <Link to={`/`} className="header__logo-link header__logo-link--active">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesCount offersFiltered={offersFiltered}/>
              <SortingTypes />
              <div className="cities__places-list places__list tabs__content">
                <OfferList type={CardType.MAIN} offers={offersFiltered}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    city: state.city
  };
};

Main.propTypes = {
  city: cityPropTypes.isRequired,
  offers: offersPropTypes.offers,
};

export {Main};
export default connect(mapStateToProps)(Main);
