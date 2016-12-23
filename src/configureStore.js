import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const initialState = {
  userInfo: {
    firstName: 'Gianluigi',
    lastName: 'Buffon'
  },
  layout: {
    year: 2016,
    photos: []
  }
};

const logger = createLogger();
const middlewares = [thunk,logger];

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
