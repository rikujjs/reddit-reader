var React = window.React = require('react')
    , Header = require('./header')
    , Posts = require('./posts');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className="container content">
          <Posts/>
        </div>
      </div>
    )
  }
});

App.start = function () {
    React.render(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;
