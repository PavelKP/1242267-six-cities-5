import {extend} from '../../../utils';
import {ActionType} from '../../action';
import Adapter from '../../../services/adapter';

const DEFAULT_SORTING = `popular`;
const DEFAULT_HOVERED_CARD = -1;

const initialState = {
  city: null,
  activeSorting: DEFAULT_SORTING,
  hoveredCard: DEFAULT_HOVERED_CARD,
  activeOffer: null,
};

const userInterface = (state = initialState, action) => {
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
    case ActionType.SET_DEFAULT_CITY:
      return extend(state, {
        city: Adapter.cityToClient(action.payload)
      });
    case ActionType.LOAD_SINGLE_OFFER:
      return extend(state, {
        activeOffer: Adapter.offerSingleToClient(action.payload)
      });
    default:
      return state;
  }
};

export {userInterface, DEFAULT_SORTING};
