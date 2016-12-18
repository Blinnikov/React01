import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  user: {
    firstName: 'Gianluigi',
    lastName: 'Buffon'
  }
}

const configureStore = () => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
