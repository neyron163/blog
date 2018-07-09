import React, { Component } from 'react';
import './blog.css';

import Header from './components/header/Header';
import Posts from './components/Posts';
import PostForm from './components/Postform';

class Blog extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default Blog;
