import {extend} from '../../utils';
import {ActionType} from './action';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';
import cities from '../../mocks/cities';

const DEFAULT_CITY = cities[0];
const filteredOffers = offers.filter((offer) => offer.location === DEFAULT_CITY.name);

const initialState = {
  city: DEFAULT_CITY,
  cities,
  offers,
  reviews,
  filteredOffers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.SET_FILTERED_OFFERS:
      return extend(state, {
        filteredOffers: action.payload
      });
  }

  return state;
};

export {reducer};
