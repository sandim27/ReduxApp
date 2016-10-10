import React from 'react';
import {render} from 'react-dom';

import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store,{history} from './store';

import Main from './containers/Main';
import Home from './containers/Home';
import PhotoGrid from './containers/PhotoGrid';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home}/>
                <Route path='map' component={PhotoGrid}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
