'use strict';

import React from 'react';
import { Link } from 'react-router-component';

class PostItem extends React.Component{
  render() {
    let post = this.props.post;
    return (
      <li className="postContainer">
        <Link href={'/posts/' + post.id}>
          <h4>{post.title}</h4>
        </Link>
        <p>{post.selftext}</p>
        <small>{post.author}</small>
      </li>
    )
  }
};

export default PostItem;
