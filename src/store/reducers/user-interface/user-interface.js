import {extend} from '../../../utils';
import {ActionType} from '../../action';

const DEFAULT_SORTING = `popular`;
const DEFAULT_HOVERED_CARD = -1;

const initialState = {
  activeSorting: DEFAULT_SORTING,
  hoveredCard: DEFAULT_HOVERED_CARD,
};

const userInterface = (state = initialState, action) => {
  switch (action.type) {
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

export {userInterface};
