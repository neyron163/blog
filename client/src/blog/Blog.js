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
import { Dropdown, Menu } from 'semantic-ui-react'

class Blog extends Component {
    render() {
        const options = [
            { key: 1, text: 'Font-size 16px', value: "H3-16px" },
            { key: 2, text: 'Font-size 24px', value: "H3-24px" },
            { key: 3, text: 'Font-size 32px', value: "H3-32px" },
          ]
        return (
            <Provider store={store}>
                    <div className="content">
                        <Header />
                        <PostForm />
                        <Menu compact>
                            <Dropdown text='Font-size - H3' options={options} simple item />
                            <Dropdown text='Font-size - H3' options={options} simple item />
                            <Dropdown text='Font-size - H3' options={options} simple item />
                        </Menu>
                        <Posts />
                    </div>
            </Provider>
        );
    }
}

export default Blog;