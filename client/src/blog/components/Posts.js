import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Link} from "react-router-dom";
import {fetchPosts, deletePost} from '../actions/postActions';
import {history} from '../store';
import {ConnectedRouter} from "react-router-redux";

import './posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ID: {},
            activeClass: false,
            test: null
        }

        this.onClick = this
            .onClick
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
        this.onToggleClass = this
            .onToggleClass
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
    onToggleClass() {
        this.setState({ activeClass: !this.state.activeClass });
    }
    onSubmit(e) {
        e.preventDefault();
        this
            .props
            .deletePost(this.state.ID);
    }
    onClick(e) {
        this
            .props
            .posts
            .map((post, i) => {
                if (i === parseInt(e.target.textContent)) {
                    this.setState({ID: post._id})
                }
            });
    }
    singlePost(sPost, match) {
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

                        <form onSubmit={this.onSubmit}>
                            <div
                                className={this.state.activeClass
                                ? "more-container active"
                                : "more-container"}>
                                <i className="ellipsis vertical icon large" onClick={this.onToggleClass}></i>
                                <div className="popup-container">
                                    <button className="delete" onClick={this.onClick} type='sumbmit'>
                                        <i aria-hidden="true" className="trash circular inverted icon">
                                            <span>{i}</span>
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </form>

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
                <div>
                    <Route exact path="/" component={postItems}/>
                    <Route exact path="/:id" component={Child}/>
                </div>
            </ConnectedRouter>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({posts: state.posts.items, newPost: state.posts.item});

export default connect(mapStateToProps, {fetchPosts, deletePost})(Posts);
