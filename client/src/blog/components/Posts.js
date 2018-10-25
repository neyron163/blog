import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchPosts, editPost, deletePost} from '../actions/postActions';
import {history} from '../store';
import {ConnectedRouter} from 'react-router-redux';
import PostSingle from './PostSingle';

import Edit from './edit/Edit';
import Social from './social/Social';
import './posts.css';

class Posts extends Component {
  constructor (props) {
    super (props);

    this.state = {
      editID: '',
      title: '',
      body: '',
    };

    this.onSubmitDelete = this.onSubmitDelete.bind (this);
    this.onClickEdit = this.onClickEdit.bind (this);
  }

  componentWillMount () {
    this.props.fetchPosts ();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift (nextProps.newPost);
    }
  }
  onClickEdit (post) {
    this.setState ({editID: post._id});
  }
  onSubmitDelete (e, post) {
    e.preventDefault ();
    this.props.deletePost (post._id);
  }
  render () {
    const postItems = () =>
      this.props.posts.map ((post, i) => {
        return (
          <div className="flex-article" key={post._id}>
            <div className="left-side">
              <Edit
                title={post.title}
                body={post.body}
                image={post.image}
                post={post._id}
                id={this.state.editID}
                check={post._id === this.state.editID}
              />
            </div>
               <div className="more-container">
                  <div className="info">
                    <i className="ellipsis vertical icon large icon-red" />
                    <div className="popup-container">
                      <div className="wrapper">

                        <button
                          type="sumbmit"
                          className="edites"
                          onClick={() => this.onClickEdit (post)}
                        >
                          <div className="remove">
                            <i aria-hidden="true" className="edit icon" />
                          </div>
                          <div className="mobile-hide">Edit Post</div>
                        </button>

                        <form onSubmit={e => this.onSubmitDelete (e, post)}>
                          <button type="sumbmit" className="delete">
                            <div className="remove">
                              <i aria-hidden="true" className="close icon" />
                            </div>
                            <div className="mobile-hide">Delete Post</div>
                          </button>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>

          </div>
        );
      });
    const SingleChild = ({match}) => (
      <PostSingle postID={match.params.id} posts={this.props.posts} />
    );
    return (
      <ConnectedRouter history={history}>
        <div className="posts">
          <Route exact path="/" component={postItems} />
          <Route exact path="/:id" component={SingleChild} />
          <Social />
        </div>
      </ConnectedRouter>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect (mapStateToProps, {fetchPosts, editPost, deletePost}) (
  Posts
);
