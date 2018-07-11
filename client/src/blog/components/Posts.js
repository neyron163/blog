import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';
import './posts.css';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state = {
            ID: {},
        }

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillMount() {
        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.deletePost(this.state.ID);
    }
    onClick(e){
        this.props.posts.map( (post, i) => {
            if(i === parseInt(e.target.textContent)){
                this.setState({ ID: post._id })
            }
        });
    }
    render() {
      const postItems = this.props.posts.map( (post, i) => {
          return (
            <div className="flex-article" key={post._id}>
                <div className="left-side">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <button className="delete" onClick={this.onClick} type='sumbmit'><i aria-hidden="true" className="trash circular inverted icon"><span>{i}</span></i></button>
                </form>
            </div>
      )
    });
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
