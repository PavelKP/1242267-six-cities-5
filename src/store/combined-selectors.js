
import {createSelector} from 'reselect';
import {getActiveCityName, getActiveSorting} from './reducers/user-interface/selectors';
import {getOffers} from './reducers/application-data/selectors';

const sortingTypeToFunction = {
  'popular': (offers) => offers,
  'price-to-high': (offers) => offers.sort((a, b) => a.price - b.price),
  'price-to-low': (offers) => offers.sort((a, b) => b.price - a.price),
  'top-rated-first': (offers) => offers.sort((a, b) => b.rating - a.rating),
};

export const getCurrentOffers = createSelector(
    getOffers,
    getActiveCityName,
    getActiveSorting,
    (offers, city, sorting) => (
      sortingTypeToFunction[sorting](
          offers.filter((offer) => offer.city.name === city)
      )
    )
);
