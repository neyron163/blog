import React, {
    Component
} from 'react';
import './blog.css';

import {
    Provider
} from 'react-redux';
import store from './store';

import Header from './components/header/Header';
import Posts from './components/Posts';
import PostForm from './components/Postform';

class Blog extends Component {
    render() {
        return (
            <Provider store={store}>
                    <div className="content">
                        <Header />
                        <PostForm />
                        <Posts />
                    </div>
            </Provider>
        );
    }
}

export default Blog;