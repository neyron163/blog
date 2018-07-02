import React, { Component } from 'react';
import './blog.css';

import Posts from './components/Posts';
import PostForm from './components/Postform';

class Blog extends Component {
  render() {
    return (
      <div className="content">
        <header>
          <div className="nick-name">Neyron</div>
        </header>
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default Blog;
