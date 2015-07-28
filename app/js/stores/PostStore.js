'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions.js';
import request from 'superagent';

const listUrl = 'http://www.reddit.com/r/reactjs/new.json?sort=hot';
const postUrl = 'http://www.reddit.com/r/reactjs/';

const PostStore = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.list = [];
  },
  getInitialState() {
    return this.list;
  },

  //Reflux automatically maps actions with on -prefix
  onLoadListing() {
    request
      .get(listUrl)
      .end((err, res) => {
        this.list = res.body.data.children;
        this.trigger(this.list);
      });
  },
  onLoadPost(id) {
    request
      .get(postUrl + id + '.json')
      .end((err, res) => {
        console.log('loaded post:', id);
        console.log(res.body);
      });
  }
});

export default PostStore;
