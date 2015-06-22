var React = require('react')
    , Item = require('./item');

var POSTS = [{id: 1, title: 'Title jee', message: 'asdasdasd ME', author: 'Ridge'},
            {id: 2, title: 'FAKE jee', message: 'MESSAGE ME', author: 'Chuck'},
            {id: 3, title: 'YOYO jee', message: 'asdasdasd ME', author: 'Ridge'}]

var List = React.createClass({
  getInitialState: function () {
    return { posts: [] };
  },
  componentWillMount: function () {
    this.fetchLatestNews();
  },
  fetchLatestNews: function () {
    //MOCK POSTS
    this.setState({posts: POSTS});
  },
  render: function () {
    return <ol className="posts">
      {this.state.posts.map(function (post) {
          return <Item key={post.id} post={post}/>
      })}
    </ol>;
  }
});

module.exports = List;
