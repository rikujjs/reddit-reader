'use strict';

import React from 'react';
import Header from './header';
import Posts from './posts';

let App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <div className="container content">
          <Posts/>
        </div>
      </div>
    )
  }
});

React.render(<App/>, document.getElementById('app'));
