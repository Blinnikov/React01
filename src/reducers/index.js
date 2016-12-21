import { combineReducers } from 'redux';
import userInfo from './userInfo';
import layout from './layout';

const rootReducer = combineReducers({
  userInfo,
  layout
})

export default rootReducer;
