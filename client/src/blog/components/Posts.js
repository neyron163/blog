import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }

  }
  componentWillMount() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const postItems = this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    })
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

export default Posts;
