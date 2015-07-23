'use strict';

import React from 'react';

class PostFooter extends React.Component {
  render() {
    return (
      <small>{this.props.post.author}</small>
    )
  }
};

export default PostFooter;
