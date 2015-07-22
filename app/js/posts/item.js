import React from 'react';
import Footer from './footer';

class Item extends React.Component{
  render() {
    var post = this.props.post;
    return (
      <li className="postContainer">
        <h4>{post.title}</h4>
        <p>{post.selftext}</p>
        <Footer post={post}/>
      </li>
    )
  }
};

export default Item;
