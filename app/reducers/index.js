import { combineReducers } from 'redux';
import PinsReducer from './reducer_pins';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  pins: PinsReducer,
  auth: AuthReducer
});

export default rootReducer;