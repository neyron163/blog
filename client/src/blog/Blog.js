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
        const optionsH1 = [
            { key: 1, text: 'Font-size 16px', value: "H1-16px" },
            { key: 2, text: 'Font-size 24px', value: "H1-24px" },
            { key: 3, text: 'Font-size 32px', value: "H1-32px" },
            { key: 4, text: 'Font-size 42px', value: "H1-42px" },
            { key: 5, text: 'Font-size 52px', value: "H1-52px" },
            { key: 6, text: 'Font-size 62px', value: "H1-62px" },
            { key: 7, text: 'Font-size 72px', value: "H1-72px" },
          ]
          const optionsH3 = [
            { key: 1, text: 'Font-size 16px', value: "H3-16px" },
            { key: 2, text: 'Font-size 24px', value: "H3-24px" },
            { key: 3, text: 'Font-size 32px', value: "H3-32px" },
            { key: 4, text: 'Font-size 42px', value: "H3-42px" },
          ]
          const optionsDescription = [
            { key: 1, text: 'Font-size 6px', value: "H3-6px" },
            { key: 2, text: 'Font-size 8px', value: "H3-8px" },
            { key: 3, text: 'Font-size 16px', value: "H3-16px" },
            { key: 4, text: 'Font-size 24px', value: "H3-24px" },
            { key: 5, text: 'Font-size 32px', value: "H3-32px" },
          ]
        return (
            <Provider store={store}>
                    <div className="content">
                        <Header />
                        <PostForm />
                        <Menu compact>
                            <Dropdown text='Font-size - H1' options={optionsH1} simple item />
                            <Dropdown text='Font-size - H3' options={optionsH3} simple item />
                            <Dropdown text='Font-size - description' options={optionsDescription} simple item />
                        </Menu>
                        <Posts />
                    </div>
            </Provider>
        );
    }
}

export default Blog;