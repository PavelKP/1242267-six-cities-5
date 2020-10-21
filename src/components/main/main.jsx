import React from 'react';
import {Link} from 'react-router-dom';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import Header from '../header/header';
import CityList from '../city-list/city-list';
import {offersPropTypes, placesCountPropTypes} from '../../prop-types/prop-types';
import {CardType} from '../../const';

import {cities} from '../../mocks/cities';

const Main = ({placesCount, offers}) => {

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
          <CityList cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList type={CardType.MAIN} offers={offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" offers={offers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  placesCount: placesCountPropTypes.placesCount,
  offers: offersPropTypes.offers,
};

export default Main;
