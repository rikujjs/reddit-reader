'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import Header from '../components/Header';
import PostStore from '../stores/PostStore';
import Actions from '../actions/Actions';
import PostItem from '../components/PostItem';

let PostInfo = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <div className="container content">
          <h4>This is post with id: {this.props.id}</h4>
          <p>Show overall post info + comments here</p>
        </div>
      </div>
    )
  }
});

export default PostInfo;
