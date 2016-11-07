require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from '../components/Nav';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Nav />
        <div class="app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
