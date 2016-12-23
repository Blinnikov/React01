import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/app.scss'

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <MuiThemeProvider>
      <AppContainer>
        <Root store={store} />
      </AppContainer>
    </MuiThemeProvider>,
    document.getElementById('root')
  );
};

injectTapEventPlugin();
render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Root', render);
}
