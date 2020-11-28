import {ActionType} from '../../action';
import {extend} from '../../../utils';
import Adapter from '../../../services/adapter';

const initialState = {
  cities: [],
  offers: [],
  reviews: [],
  favorites: [],
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
    case ActionType.UPDATE_OFFER:
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      return extend(state, {
        offers: [...state.offers.slice(0, index), Adapter.offerSingleToClient(action.payload), ...state.offers.slice(index + 1)],
      });
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: Adapter.offersToClient(action.payload),
      });
    case ActionType.UPDATE_FAVORITE:
      const i = state.favorites.findIndex((offer) => offer.id === action.payload.id);
      if (i === -1) {
        return extend(state, {
          favorites: [...state.favorites, Adapter.offerSingleToClient(action.payload)]
        });
      } else {
        const contractedFavorites = state.favorites.slice();
        contractedFavorites.splice(i, 1);

        return extend(state, {
          favorites: contractedFavorites,
        });
      }
    default:
      return state;
  }
};

export {applicationData};
