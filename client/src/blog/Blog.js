import React, { Component } from 'react';
import './blog.css';

import { Provider } from 'react-redux';
import store, { history } from './store';

import Header from './components/header/Header';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { BrowserRouter as Router } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
        <Provider store={store}>
                <Router>
            <div className="content">
                <Header />
                <PostForm />
                <Posts />
            </div>
           </Router>
      </Provider>
    );
  }
}

export default Blog;
