import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import * as reducers from './reducers';
import promiseUsers from './middlewares/promiseUsers';

const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const reducer = combineReducers(Object.assign({}, reducers, { routing: routerReducer }));

const createStoreWithMiddleware = applyMiddleware(promiseUsers, logger())(createStore);

const store = createStoreWithMiddleware(reducer, {
  photos: ['sdf'],
  photo: ['sdf'],
}, enchancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
