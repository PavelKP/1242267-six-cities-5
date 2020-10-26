import {extend} from '../../utils';
import {ActionType} from './action';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';
import cities from '../../mocks/cities';

const DEFAULT_CITY = cities[0];
const DEFAULT_FILTER = `popular`;

const initialState = {
  city: DEFAULT_CITY,
  cities,
  offers,
  reviews,
  activeFilter: DEFAULT_FILTER,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.SET_ACTIVE_FILTER:
      return extend(state, {
        activeFilter: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
