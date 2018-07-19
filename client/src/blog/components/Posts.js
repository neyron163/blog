import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Link} from "react-router-dom";
import {fetchPosts, editPost, deletePost} from '../actions/postActions';
import {history} from '../store';
import {ConnectedRouter} from "react-router-redux";

import Social from './social/Social';
import './posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editID: ''
        }

        this.onSubmitDelete = this
            .onSubmitDelete
            .bind(this);
        this.onSubmitEdit = this
            .onSubmitEdit
            .bind(this);
        this.onClickEdit = this
            .onClickEdit
            .bind(this);
    }

    componentWillMount() {
        this
            .props
            .fetchPosts();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this
                .props
                .posts
                .unshift(nextProps.newPost);
        }
    }
    onClickEdit(post) {
        this.setState({ editID: post._id });
    }
    onSubmitEdit(e) {
        // e.preventDefault();
        // this
        // .props
        // .editPost(ID);
    }
    onSubmitDelete(e, post) {
        e.preventDefault();
        this.props.deletePost(post._id);
    }
    singlePost(sPost) {
        return this
            .props
            .posts
            .map((post, i) => {
                if (post._id === sPost) {
                    return (
                        <div key={post._id + i}>
                            <h1>{post.title}</h1>
                            <div className="p-inner">{post.body}</div>
                            <div className="p-inner">{post.body}</div>
                            <div className="p-inner">{post.body}</div>
                            <img src={'/images/' + post.image} />
                        </div>
                    )
                }
            });
    }
    render() {
        const postItems = () => this.props.posts.map((post, i) => {
            if(this.state.editID == post._id){
                return (
                    <div className="flex-article" key={post._id}>

                        <div className="left-side">
                            <input />
                            <input />
                            {/* <h3><Link to={post._id}>{post.title}</Link></h3>
                            <p>{post.body}</p>
                            <img src={ '/images/' + post.image} /> */}
                            {/* <Link to={post._id}>Learn more...</Link> */}
                        </div>

                            <div className="more-container">
                                <div className="info">
                                <i className="ellipsis vertical icon large icon-red"></i>
                                <div className="popup-container">
                                <div className="wrapper">

                                            <button type="sumbmit" className="edites" onClick={() => this.onClickEdit(post)}>
                                                <div className="remove">
                                                        <i aria-hidden="true" className="edit icon"></i>
                                                </div>
                                                <div>Edit Post</div>
                                            </button>

                                            <form onSubmit={(e) => this.onSubmitDelete(e, post)}>
                                                <button type="sumbmit" className="delete">
                                                    <div className="remove">
                                                            <i aria-hidden="true" className="close icon"></i>
                                                    </div>
                                                    <div>Delete Post</div>
                                                </button>
                                            </form>

                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                )
            }else{
                return (
                    <div className="flex-article" key={post._id}>
                        <div className="left-side">
                            <h3><Link to={post._id}>{post.title}</Link></h3>
                            <p>{post.body}</p>
                            <img src={ '/images/' + post.image} />
                            <Link to={post._id}>Learn more...</Link>
                        </div>

                            <div className="more-container">
                                <div className="info">
                                <i className="ellipsis vertical icon large icon-red"></i>
                                <div className="popup-container">
                                <div className="wrapper">

                                            <button type="sumbmit" className="edites" onClick={() => this.onClickEdit(post)}>
                                                <div className="remove">
                                                        <i aria-hidden="true" className="edit icon"></i>
                                                </div>
                                                <div>Edit Post</div>
                                            </button>

                                            <form onSubmit={(e) => this.onSubmitDelete(e, post)}>
                                                <button type="sumbmit" className="delete">
                                                    <div className="remove">
                                                            <i aria-hidden="true" className="close icon"></i>
                                                    </div>
                                                    <div>Delete Post</div>
                                                </button>
                                            </form>

                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                )
            }
            });
            const Child = ({match}) => (
                <div>
                    {this.singlePost(match.params.id, match, postItems)}
                </div>
            );
        return (
            <ConnectedRouter history={history}>
                <div className="posts">
                    <Route exact path="/" component={postItems}/>
                    <Route exact path="/:id" component={Child}/>
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
    newPost: PropTypes.object
};

const mapStateToProps = state => ({posts: state.posts.items, newPost: state.posts.item});

export default connect(mapStateToProps, {fetchPosts, editPost,  deletePost})(Posts);
