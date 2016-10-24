import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './containers/Main/index';
import Home from './containers/Home';
import Photos from './containers/Photos';
import PhotoView from './containers/PhotoView';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="photos/:page" component={Photos} />
        <Route path="photo/view/:id" component={PhotoView} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
