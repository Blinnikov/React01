import { combineReducers } from 'redux';
import userInfo from './userInfo';
import layout from './layout';
import loading from './loading';

const rootReducer = combineReducers({
  userInfo,
  layout,
  loading
})

export default rootReducer;
