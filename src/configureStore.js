import { createStore } from 'redux';
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
}

const configureStore = () => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
