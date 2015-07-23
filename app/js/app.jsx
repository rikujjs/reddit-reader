'use strict';

import React from 'react';
import Header from './header';
import List from './posts/list';

let App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <div className="container content">
          <List posts={this.state.postList}/>
        </div>
      </div>
    )
  }
});

React.render(<App/>, document.getElementById('app'));
