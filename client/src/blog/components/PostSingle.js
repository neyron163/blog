import React, {Component} from 'react';
import {Button, Icon, Label} from 'semantic-ui-react';

class PostSingle extends Component {
  render () {
    return this.props.posts.map ((post, i) => {
      if (post._id === this.props.postID) {
        return (
          <div key={post._id + i} className="single-post">
            <h1>{post.title}</h1>
            <div className="p-inner">{post.body}</div>
            {post.image
              ? <img src={'/images/' + post.image} aria-hidden alt="image" />
              : null}
            <Button as="div" labelPosition="right">
              <Button color="red">
                <Icon name="heart" />
                Like
              </Button>
              <Label as="a" basic color="red" pointing="left">
                2,048
              </Label>
            </Button>
          </div>
        );
      }
      return false;
    });
  }
}

export default PostSingle;
