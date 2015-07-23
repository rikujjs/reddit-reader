'use strict';
import React from 'react';
import Actions from '../actions.js';
import Item from './item';

class List extends React.Component {
  componentDidMount() {
    Actions.load();
  }
  render() {
    return (
      <ol className="posts">
        {this.props.posts.map(function (post) {
            return <Item key={post.data.id} post={post.data}/>
        })}
      </ol>
    )
  }
};

export default List;
