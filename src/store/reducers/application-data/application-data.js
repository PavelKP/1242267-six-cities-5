/*
import offers from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';*/
import cities from '../../../mocks/cities';
import {ActionType} from '../../action';
import {extend} from '../../../utils';
import Adapter from '../../../services/adapter';

const DEFAULT_CITY = cities[0];

const initialState = {
  cities: [],
  offers: [],
  reviews: [],
};


const applicationData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: Adapter.offerToClient(action.payload),
      });
    default:
      return state;
  }
};

export {applicationData, DEFAULT_CITY};
