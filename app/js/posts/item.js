var React = require('react')
    , Footer = require('./footer');

var Item = React.createClass({
  render: function () {
    var post = this.props.post;
    return (
      <li>
        <h4>{post.title}</h4>
        <p>{post.message}</p>
        <Footer post={post}/>
      </li>
    )
  }
});

module.exports = Item;
