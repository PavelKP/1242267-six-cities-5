import {extend} from '../../utils';
import {ActionType} from './action';
import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';
import cities from '../../mocks/cities';

const DEFAULT_CITY = cities[0];
const DEFAULT_SORTING = `popular`;
const DEFAULT_HOVERED_CARD = null;

const initialState = {
  city: DEFAULT_CITY,
  cities,
  offers,
  reviews,
  activeSorting: DEFAULT_SORTING,
  hoveredCard: DEFAULT_HOVERED_CARD,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.SET_ACTIVE_SORTING:
      return extend(state, {
        activeSorting: action.payload
      });
    case ActionType.SET_HOVERED_CARD:
      return extend(state, {
        hoveredCard: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
