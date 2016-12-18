import React from 'react';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from '../containers/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
);

export default Root;
