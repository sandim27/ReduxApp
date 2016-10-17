import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import photos from './reducers/photos';
import defaultSettings from './reducers/defaultSettings';

import promiseUsers from './middlewares/promisePhotos';
import changePage from './middlewares/changePage';


const middlewareRoute = routerMiddleware(browserHistory);

const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const reducer = combineReducers({
  photos,
  defaultSettings,
  routing: routerReducer,
});

const createStoreWithMiddleware = applyMiddleware(
    promiseUsers,
    changePage,
    middlewareRoute,
    logger()
)(createStore);

const store = createStoreWithMiddleware(reducer, {
  photos: [],
  defaultSettings: {
    url: 1,
    perPage: 12,
    counter: 0,
    myAvatar: 'https://robohash.org/eumetea.bmp?size=20x20&set=set1',
  },
}, enchancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
