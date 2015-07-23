'use strict';

import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router-component';
let { NotFound, Locations, Location } = Router;

import PostListing from './views/PostListing';
import NotFoundPage from './views/NotFound';

import PostStore from './stores/PostStore';

class App extends React.Component {
  render() {
    return (
      <Locations hash>
        <NotFound handler={NotFoundPage}/>
        <Location path='/' handler={PostListing}/>
      </Locations>
    )
  }
};

React.render(<App/>, document.getElementById('app'));
