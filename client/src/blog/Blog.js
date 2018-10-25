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
  }
  render () {


    return (
      <Provider store={store}>
        <div className="content">
          <Header />
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default Blog;
