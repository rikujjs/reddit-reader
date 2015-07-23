'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions.js';
import request from 'superagent';

const url = 'http://www.reddit.com/r/reactjs/new.json?sort=hot';

const PostStore = Reflux.createStore({
  listenables: [Actions],
  init() {
    this.listenTo(Actions.load, this.fetchData);
  },
  getInitialState() {
    this.list = [];
    return this.list;
  },
  fetchData() {
    request
      .get(url)
      .end((err, res) => {
        this.list = res.body.data.children;
        this.trigger(this.list);
      });
  }
});

export default PostStore;
