import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

import './styles/app.scss'

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Root', render);
}
