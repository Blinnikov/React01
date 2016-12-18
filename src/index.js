import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  // module.hot.accept('./containers/App', render);
  module.hot.accept('./components/Root', render);
}
