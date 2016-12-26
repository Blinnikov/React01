import { combineReducers } from 'redux';
import userInfo from './userInfo';
import layout from './layout';
import loading from './loading';
import authenticated from './authenticated';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
  userInfo,
  layout,
  loading,
  authenticated,
  errorMessage
})

export default rootReducer;
