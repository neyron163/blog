import React, {Component} from 'react';
import './blog.css';

import {Provider} from 'react-redux';
import store from './store';

import Header from './components/header/Header';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import {loadState} from './localStorage';

class Blog extends Component {
  constructor (props) {
    super (props);
    this.state = {
      res: false,
    };
  }
  render () {
    store.subscribe (() => {
      this.setState ({res: loadState ('response')});
    });

    return (
      <Provider store={store}>
        <div className="content">
          <Header value={this.state.res} />
          <PostForm value={this.state.res} />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default Blog;
