var React = require('react');
var SearchBar = require('./search-bar');

var Header = React.createClass({
  render: function () {
    return <header>
      <div className="container">
        <h1>READER!</h1>
        <SearchBar/>
      </div>
    </header>
  }
});

module.exports = Header;
