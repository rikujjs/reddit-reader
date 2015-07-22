// This file is not re-writen in ES6 classes because it will be replaced
// soon with a flux implementation.

'use strict';

var React = require('react')
    , Item = require('./item')
    , $ = require('jquery');

var url = 'http://www.reddit.com/r/androiddev/new.json?sort=hot';

var List = React.createClass({
  getInitialState: function () {
    return { posts: [] };
  },
  componentWillMount: function () {
    this.fetchLatestNews();
  },
  fetchLatestNews: function () {
    var self = this;

    $.getJSON(url, function(posts) {
      self.setState({posts: posts.data.children});
    });
  },
  render: function () {
    return (
      <ol className="posts">
        {this.state.posts.map(function (post) {
            return <Item key={post.data.id} post={post.data}/>
        })}
      </ol>
    )
  }
});

module.exports = List;
