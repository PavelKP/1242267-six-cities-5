import React from 'react';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import Header from '../header/header';
import CityList from '../city-list/city-list';
import PlacesCount from '../places-count/places-count';
import SortingTypes from '../sorting-types/sorting-types';
import withToggler from '../../hocs/with-toggler/with-toggler';
import MainEmpty from '../main-empty/main-empty';
import PropTypes from 'prop-types';
import {CardType} from '../../const';
import {connect} from 'react-redux';
import {offersPropTypes} from '../../prop-types/prop-types';
import {getCurrentOffers} from '../../store/combined-selectors';
import {getActiveCityName} from '../../store/reducers/user-interface/selectors';
import withBoardLoading from '../../hocs/with-board-loading/with-board-loading';

const OfferListWrapped = withBoardLoading(OfferList);

const SortingTypesWrapped = withToggler(SortingTypes);

const Main = ({offers, city}) => {
  const isEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
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
              ? <MainEmpty city={city} />
              : <React.Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <PlacesCount offersFiltered={offers} />
                  <SortingTypesWrapped />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferListWrapped type={CardType.MAIN} />
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

Main.propTypes = {
  offers: offersPropTypes.offers,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    offers: getCurrentOffers(state),
    city: getActiveCityName(state),
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
