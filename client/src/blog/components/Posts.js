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
            postsID: []
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
        console.log(e.target.textContent)
    //    this.setState({ 
    //         ID: e.target.parentElement.parentElement.id
    //    });
    }
    render() {
        console.log(this.state)
      const postItems = this.props.posts.map( (post, i) => {
        //   postsId.push({ id: post._id });
          return (
            <div className="flex-article" key={post._id}>
                <div className="left-side">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                <form onSubmit={this.onSubmit} id={post._id}>
                <span>{post._id}</span>
                    <button className="delete" onClick={this.onClick} type='sumbmit'><i aria-hidden="true" className="trash circular inverted icon">{i}</i></button>
                </form>
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
