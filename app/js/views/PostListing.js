'use strict';

import React from 'react';
import Reflux from 'reflux';

import PostList from '../components/PostList';
import Header from '../components/Header';
import PostStore from '../stores/PostStore';

let PostListing = React.createClass({
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

export default PostListing;
