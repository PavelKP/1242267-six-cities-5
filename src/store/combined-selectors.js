
import {createSelector} from 'reselect';
import {getActiveCityName, getActiveSorting} from './reducers/user-interface/selectors';
import {getOffers} from './reducers/application-data/selectors';

const sortingTypeToFunction = {
  'popular': (offers) => offers,
  'price-to-high': (offers) => offers.sort((a, b) => a.price - b.price),
  'price-to-low': (offers) => offers.sort((a, b) => b.price - a.price),
  'top-rated-first': (offers) => offers.sort((a, b) => b.rating - a.rating),
};

export const getOffersByCity = createSelector(
    getOffers,
    getActiveCityName,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
    // эти офферы сортированные по городу можно было бы получить и сверху из компонента main, а не фильтровать второй раз
    // Но тогда непонятно, как передать их в селектор (???)
    getOffers,
    getActiveCityName,
    getActiveSorting,
    (offers, city, sorting) => {
      return (
        sortingTypeToFunction[sorting](
            offers.filter((offer) => offer.city.name === city)
        )
      );
    }
);
