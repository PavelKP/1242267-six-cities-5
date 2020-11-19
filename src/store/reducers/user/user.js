import {ActionType} from '../../action';
import {AuthorizationStatus} from "../../../const";
import Adapter from '../../../services/adapter';

if (!localStorage.getItem(`avatarUrl`) && !localStorage.getItem(`email`)) {
  localStorage.setItem(`avatarUrl`, null);
  localStorage.setItem(`email`, null);
}

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {
    avatarUrl: localStorage.getItem(`avatarUrl`),
    email: localStorage.getItem(`email`),
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
    case ActionType.SET_USER_DATA:
      localStorage.setItem(`avatarUrl`, action.payload.avatar_url);
      localStorage.setItem(`email`, action.payload.email);

      return Object.assign({}, state, {
        userData: Adapter.userDataToClient(action.payload),
      });
    default:
      return state;
  }
};

export {user};
