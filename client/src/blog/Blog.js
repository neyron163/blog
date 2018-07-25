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
            test: false
        } 
        store.subscribe(() => {
            this.setState({ test: store.getState().enter.response })
            localStorage.setItem("test", this.state.test);
            console.log(localStorage)
          });
    }
    render() {
        if(this.state.test){
            return (
                <Provider store={store}>
                        <div className="content">
                            <Header />
                            <PostForm />
                            <Posts getValueEdit={this.state.test} />
                        </div>
                </Provider>
            );
        }else{
            return (
                <Provider store={store}>
                        <div className="content">
                            <Header />
                            <Posts />
                        </div>
                </Provider>
            );
        }
    }
}

export default Blog;