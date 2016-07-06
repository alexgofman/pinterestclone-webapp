import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import axios from 'axios';

import App from './components/app';
import Home from './components/home';
import Profile from './components/profile';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise,thunk)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path='/user(/:username' component={Home} />
        <Route path='/profile(/:token)' component={Profile} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));