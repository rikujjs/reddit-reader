var React = require('react');

var SearchBar = React.createClass({
  render: function () {
    return (
      <input type='text' className="search" placeholder="/r/subreddit"/>
    )
  }
});

module.exports = SearchBar;
