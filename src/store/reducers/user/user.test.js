import {user} from './user';
import {ActionType} from '../../../store/action';
import {rawUserData, userData} from '../../../__mocks__/mock-store';
import {AuthorizationStatus} from '../../../const';

describe(`user reducer`, () => {
  it(`user reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: {
        avatarUrl: `null`,
        email: `null`,
      }
    });
  });

  it(`user reducer without additional parameters should update authorization status`, () => {
    expect(user(void 0, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {
        avatarUrl: `null`,
        email: `null`,
      }
    });
  });

  it(`user reducer without additional parameters should update user data`, () => {
    expect(user(void 0, {
      type: ActionType.SET_USER_DATA,
      payload: rawUserData,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData,
    });
  });

});
