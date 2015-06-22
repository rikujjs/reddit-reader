var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <small>{this.props.post.author}</small>
    )
  }
});

module.exports = Footer;
