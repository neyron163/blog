import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Link} from "react-router-dom";
import {fetchPosts, editPost, deletePost} from '../actions/postActions';
import {history} from '../store';
import {ConnectedRouter} from "react-router-redux";

import './posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeClass: false
        }

        this.onSubmitDelete = this
            .onSubmitDelete
            .bind(this);
        this.onSubmitEdit = this
            .onSubmitEdit
            .bind(this);
        this.onToggleClass = this
            .onToggleClass
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
    onToggleClass(e) {
        this.props.posts.forEach((post, i) => {
           if(parseInt(e.target.textContent) === i){
               console.log(this)
           }
        });
        this.setState({ activeClass: !this.state.activeClass });

    }
    onClickEdit(e) {
        // e.target.parentElement.classList.toggle('edit-active');
    }
    onSubmitEdit(e) {
        e.preventDefault();
        let ID = {id: 1};
        this
        .props
        .editPost(ID);
    }
    onSubmitDelete(e) {
        e.preventDefault();
        let ID;
        this.props.posts.map((post, i) => {
            if (i === parseInt(e.target.textContent)) {
                ID = post._id;
            }
        });
        this
            .props
            .deletePost(ID);
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
                        </div>
                    )
                }
            });
    }
    render() {
        const postItems = () => this
            .props
            .posts
            .map((post, i) => {
                return (
                    <div className="flex-article" key={post._id}>
                        <div className="left-side">
                            <h3><Link to={post._id}>{post.title}</Link></h3>
                            <p>{post.body}</p>
                        </div>

                            <div className={this.state.activeClass ? "more-container active" : "more-container"}>
                                <i className="ellipsis vertical icon large" onClick={this.onToggleClass}><span>{i}</span></i>
                                <div className="popup-container">
                                <div className="wrapper">

{/* onSubmit={this.onSubmitEdit} */}
                                      {/* <form> */}
                                            <button type="sumbmit" className="edites" onClick={this.onClickEdit}>
                                                <div className="remove">
                                                        <i aria-hidden="true" className="edit icon">
                                                            <span>{i}</span>
                                                        </i>
                                                </div>
                                                <div>Edit Post</div>
                                            </button>
                                        {/* </form> */}

                                        <form onSubmit={this.onSubmitDelete}>
                                            <button type="sumbmit" className="delete">
                                                <div className="remove">
                                                        <i aria-hidden="true" className="close icon">
                                                            <span>{i}</span>
                                                        </i>
                                                </div>
                                                <div>Delete Post</div>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                    </div>
                )
            });
            const Child = ({match}) => (
                <div>
                    {this.singlePost(match.params.id, match, postItems)}
                    <img src="/images/cars.jpg" />
                </div>
            );
        return (
            <ConnectedRouter history={history}>
                <div className="posts">
                    <Route exact path="/" component={postItems}/>
                    <Route exact path="/:id" component={Child}/>
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
