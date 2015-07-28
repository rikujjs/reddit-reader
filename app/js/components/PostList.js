'use strict';
import React from 'react';
import Actions from '../actions/Actions';
import PostItem from './PostItem';

class PostList extends React.Component {
  componentDidMount() {
    Actions.loadListing();
  }
  render() {
    return (
      <ol className="posts">
        {this.props.posts.map(function (post) {
            return <PostItem key={post.data.id} post={post.data}/>
        })}
      </ol>
    )
  }
};

export default PostList;
