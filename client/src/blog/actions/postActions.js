import {
    FETCH_POSTS,
    NEW_POST,
    EDIT_POST,
    DEL_POST,
    POST_USER
} from './types';

export const fetchPosts = () => dispatch => {
    fetch('/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
};

export const postUser = (user) => dispatch => {
    fetch('/postUser', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    // .then(resJson => console.log(resJson))
    .then(response => dispatch({
        type: POST_USER,
        payload: response
    }));
}

export const createPost = (formData) => dispatch => {
    fetch('/postsForm', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
};

export const editPost = (postID, ...postEditor) => dispatch => {
    fetch('/postsEdit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ID: postID,
                postEditor: postEditor
            })
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: EDIT_POST,
            payload: post
        }));
};

export const deletePost = (postID) => dispatch => {
    fetch('/postsDel', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ID: postID
            })
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: DEL_POST,
            payload: post
        }));
};