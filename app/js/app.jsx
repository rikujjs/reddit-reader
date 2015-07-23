'use strict';

import React from 'react';
import Header from './components/Header';
import PostList from './components/PostList';

import PostStore from './stores/PostStore';
import Reflux from 'reflux';

let App = React.createClass({
  mixins: [Reflux.connect(PostStore, "list")],

  render() {
    return (
      <div>
        <Header/>
        <div className="container content">
          <PostList posts={this.state.list}/>
        </div>
      </div>
    )
  }
});

React.render(<App/>, document.getElementById('app'));
