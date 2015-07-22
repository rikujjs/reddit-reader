import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <small>{this.props.post.author}</small>
    )
  }
};

export default Footer;
