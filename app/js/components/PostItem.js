'use strict';

import React from 'react';

class PostItem extends React.Component{
  render() {
    let post = this.props.post;
    return (
      <li className="postContainer">
        <h4>{post.title}</h4>
        <p>{post.selftext}</p>
        <small>{post.author}</small>
      </li>
    )
  }
};

export default PostItem;
