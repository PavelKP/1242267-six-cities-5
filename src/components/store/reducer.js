import {extend} from '../../utils';
import {ActionType} from './action';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';
import cities from '../../mocks/cities';

const DEFAULT_CITY = cities[0];
const placesCount = offers.filter((offer) => offer.location === DEFAULT_CITY).length;

const initialState = {
  city: DEFAULT_CITY,
  cities,
  offers,
  reviews,
  placesCount
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.SET_PLACES_COUNT:
      return extend(state, {
        placesCount: action.payload
      });
  }

  return state;
};

export {reducer};
