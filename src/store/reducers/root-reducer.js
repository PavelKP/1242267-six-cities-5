import {combineReducers} from 'redux';
import {applicationData} from './application-data/application-data';
import {userInterface} from './user-interface/user-interface';

export const NameSpace = {
  DATA: `DATA`,
  INTERFACE: `INTERFACE`,
};

export default combineReducers({
  [NameSpace.DATA]: applicationData,
  [NameSpace.INTERFACE]: userInterface,
});
