import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute ,hashHistory } from 'react-router';
import App from './pages/App';
import Home from './pages/Home';

// Render the main component into the dom

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      
    </Route>
  </Router>, app);
