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
    constructor(props){
        super(props);
        this.state = {
            h1: 32
        }
    }
    render() {
        const optionsH1 = [
            { key: 1, text: '16px', value: "16" },
            { key: 2, text: '24px', value: "24" },
            { key: 3, text: '32px', value: "32" },
            { key: 4, text: '42px', value: "42" },
            { key: 5, text: '52px', value: "52" },
            { key: 6, text: '62px', value: "62" },
            { key: 7, text: '72px', value: "72" },
          ]
          const optionsH3 = [
            { key: 1, text: '16px', value: "16" },
            { key: 2, text: '24px', value: "24" },
            { key: 3, text: '32px', value: "32" },
            { key: 4, text: '42px', value: "42" },
          ]
          const optionsDescription = [
            { key: 1, text: '6px', value: "6" },
            { key: 2, text: '8px', value: "8" },
            { key: 3, text: '16px', value: "16" },
            { key: 4, text: '24px', value: "24" },
            { key: 5, text: '32px', value: "32" },
          ]
        //   const font = {
        //       fontSize: this.state.h1 + "px"
        //   }
        return (
            <Provider store={store}>
                    <div className="content">
                        <Header />
                        <PostForm />
                        <Menu compact>
                            <Dropdown onChange={(e, { value }) => this.setState({ h1: value }) } text='H1' options={optionsH1} simple item />
                            <Dropdown onChange={(e, { value }) => alert(value)} text='H3' options={optionsH3} simple item />
                            <Dropdown onChange={(e, { value }) => alert(value)} text='Description' options={optionsDescription} simple item />
                        </Menu>
                        <Posts />
                    </div>
            </Provider>
        );
    }
}

export default Blog;