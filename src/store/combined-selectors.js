
import {createSelector} from 'reselect';
import {getActiveCityName} from './reducers/user-interface/selectors';
import {getOffers} from './reducers/application-data/selectors';

export const getOffersByCity = createSelector(
    getOffers,
    getActiveCityName,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);
