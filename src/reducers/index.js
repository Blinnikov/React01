import { combineReducers } from 'redux';
import userInfo from './userInfo';
import layout from './layout';
import loading from './loading';
import authenticated from './authenticated';

const rootReducer = combineReducers({
  userInfo,
  layout,
  loading,
  authenticated
})

export default rootReducer;
