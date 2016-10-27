import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './containers/Main/index';
import Home from './containers/Home';
import Photos from './containers/Photos';
import SinglePhoto from './containers/SinglePhoto';
import NotFound from './components/NotFound';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="photos/:page" component={Photos} />
        <Route path="photo/view/:id" component={SinglePhoto} />
        <Route path="photo/view/:id" component={SinglePhoto} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
