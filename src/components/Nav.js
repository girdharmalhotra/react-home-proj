require('normalize.css/normalize.css');
require('./styles/Nav.scss');

import React from 'react';
import { IndexLink, Link } from "react-router";
// import './styles/Nav.sass';

export default class NavComponent extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">Brand</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <input class="form-control input" placeholder="Search" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

NavComponent.defaultProps = {
};
