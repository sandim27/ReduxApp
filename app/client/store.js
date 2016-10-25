import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import photos from './reducers/photos';
import defaultSettings from './reducers/defaultSettings';
import uploadedImage from './reducers/uploadedImage';

import addNewComment from './middlewares/addNewComment';
import getAllPhotos from './middlewares/getAllPhotos';
import changePage from './middlewares/changePage';
import uploadNewPhoto from './middlewares/uploadNewPhoto';
import addNewPhoto from './middlewares/addNewPhoto';
import deletePhoto from './middlewares/deletePhoto';
import removeComment from './middlewares/removeComment';

const middlewareRoute = routerMiddleware(browserHistory);

const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const reducer = combineReducers({
  photos,
  defaultSettings,
  uploadedImage,
  routing: routerReducer,
});

const createStoreWithMiddleware = applyMiddleware(
    getAllPhotos,
    changePage,
    uploadNewPhoto,
    addNewComment,
    addNewPhoto,
    deletePhoto,
    removeComment,
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
  uploadedImage: {
    name: '',
    url: '',
  },
}, enchancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
