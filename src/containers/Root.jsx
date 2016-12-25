import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';
import AppContainer from '../containers/AppContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
