import {combineReducers} from 'redux';
import {applicationData} from './application-data/application-data';
import {userInterface} from './user-interface/user-interface';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  INTERFACE: `INTERFACE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: applicationData,
  [NameSpace.INTERFACE]: userInterface,
  [NameSpace.USER]: user,
});
