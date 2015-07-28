'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import Header from '../components/Header';
import PostStore from '../stores/PostStore';
import Actions from '../actions/Actions';
import PostItem from '../components/PostItem';

let PostInfo = React.createClass({
  mixins: [Reflux.connectFilter(PostStore, "post", function(posts) {
    return posts.filter(function(post) {
      return post.data.id === this.props.id;
    }.bind(this))[0];
  })],
  render() {
    return (
      <div>
        <Header/>
        <div className="container content">
          <h4>This is post with id: {this.props.id}</h4>
          <PostItem post={this.state.post.data}/>
          <p>TODO: comments here</p>
        </div>
      </div>
    )
  }
});

export default PostInfo;
