import * as modules from './modules';
import * as allSagas from './sagas';
import { asImmutable, isDevEnv } from '../utils';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const getReducers = () => Object.keys(modules).reduce((acc, curr) => {
    const module = modules[curr];
    if (module.reducers && module.reducers.reducer) {
        acc[module.constants.default] = module.reducers.reducer;
    }
    return acc;
}, {});

export const createReduxStore = ({
  middlewares = [],
  initialState = {},
  enhancers = [],
} = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  if (isDevEnv()) {
    middlewares.push(createLogger({
      collapsed: true,
    }));
  }
  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = composeWithDevTools(...enhancers);
  const store = createStore(
    combineReducers(getReducers()),
    asImmutable(initialState),
    enhancer,
  );
  store.sagas = Object.keys(allSagas).map(sagaName => sagaMiddleware.run(allSagas[sagaName]));
  store.cancelSagas = () => store.sagas.forEach(saga => saga.cancel());
  return store;
};
