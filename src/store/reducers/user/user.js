import {ActionType} from '../../action';
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AuthorizationStatus:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

export {user};
