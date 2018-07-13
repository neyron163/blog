import React, { Component } from 'react';
import './blog.css';

import { Provider } from 'react-redux';
import store, { history } from './store';

import Header from './components/header/Header';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import {
    ConnectedRouter
  } from "react-router-redux";

class Blog extends Component {
  render() {
    return (
        <Provider store={store}>
         <ConnectedRouter history={history}>
                    <div className="content">
                        <Header />
                        <PostForm />
                        <Posts />
                    </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Blog;
