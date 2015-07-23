'use strict';

import React from 'react';
import Header from './header';
import List from './posts/list';

import PostStore from './store.js';
import Reflux from 'reflux';

let App = React.createClass({
  mixins: [Reflux.connect(PostStore, "list")],

  render() {
    return (
      <div>
        <Header/>
        <div className="container content">
          <List posts={this.state.list}/>
        </div>
      </div>
    )
  }
});

React.render(<App/>, document.getElementById('app'));
