'use strict';

import React from 'react';
import PostFooter from './PostFooter';

class PostItem extends React.Component{
  render() {
    var post = this.props.post;
    return (
      <li className="postContainer">
        <h4>{post.title}</h4>
        <p>{post.selftext}</p>
        <PostFooter post={post}/>
      </li>
    )
  }
};

export default PostItem;
