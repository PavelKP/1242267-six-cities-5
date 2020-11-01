import React from 'react';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import MemoHeader from '../header/header';
import CityList from '../city-list/city-list';
import PlacesCount from '../places-count/places-count';
import SortingTypes from '../sorting-types/sorting-types';
import withToggler from '../../hocs/with-toggler/with-toggler';
import MainEmpty from '../main-empty/main-empty';
import {CardType} from '../../const';
import {connect} from 'react-redux';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';

const SortingTypesWrapped = withToggler(SortingTypes);

const Main = ({offers, city}) => {

  const offersFiltered = offers.filter((offer) => offer.location === city.name);
  const isEmpty = offersFiltered.length === 0;

  return (
    <div className="page page--gray page--main">
      <MemoHeader />
      <main className={`page__main page__main--index ${isEmpty ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList />
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${isEmpty
            ? `cities__places-container--empty`
            : ``}`}>

            {isEmpty
              ? <MainEmpty city={city.name} />
              : <React.Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <PlacesCount offersFiltered={offersFiltered} />
                  <SortingTypesWrapped />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList type={CardType.MAIN} offers={offersFiltered} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map className="cities__map" />
                </div>
              </React.Fragment>}
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
