import {combineReducers} from 'redux';
import {sessionReducer} from './session-reducer';
import {userReducer} from './user-reducer';
const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer
})
export default rootReducer;