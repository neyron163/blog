import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import './posts.css';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state = {
            ID: {}
        }

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    onSubmit(e) {
        e.preventDefault();

        fetch('/postsDel', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ID: this.state.ID})
        })
        .then(res => res.json())
        .then(resJson => console.log(resJson))
        // .then(post => dispatch({
        //     type: NEW_POST,
        //     payload: post
        // }));

    }
    onClick(e){
       this.setState({ 
            ID: e.target.parentElement.parentElement.id
       });
    }
  render() {
      const postItems = this.props.posts.map(post => {
          return (
            <div className="flex-article" key={post.postID}>
                <div className="left-side">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                <form onSubmit={this.onSubmit} id={post._id}>
                    <div className="right-side">
                        <button className="delete" onClick={this.onClick} type='sumbmit'>del</button>
                    </div>
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
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
