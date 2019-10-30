import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import { createReduxStore, router } from './redux';
import { getHistory } from './utils';
import { Provider } from 'react-redux';

const store = createReduxStore();

require('./scss/base/_all.scss');

window.reduxStore = store;

getHistory().listen((location) => {
  store.dispatch(router.actions.routeChange(location));
});

ReactDOM.render(
  (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ),
  document.getElementById('app'),
);
