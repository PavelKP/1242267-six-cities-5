/*
import offers from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';*/
import {ActionType} from '../../action';
import {extend} from '../../../utils';
import Adapter from '../../../services/adapter';

const initialState = {
  cities: [],
  offers: [],
  reviews: [],
};

const applicationData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: Adapter.offersToClient(action.payload),
      });
    case ActionType.LOAD_CITIES:
      let uniqueCities = [];
      for (let offer of action.payload) {
        if (!uniqueCities.find(({name}) => name === offer.city.name)) {
          uniqueCities.push(Adapter.cityToClient(offer.city));
        }
        if (uniqueCities.length === 6) {
          break;
        }
      }
      return extend(state, {
        cities: uniqueCities
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: Adapter.reviewsToClient(action.payload),
      });
    default:
      return state;
  }
};

export {applicationData};
