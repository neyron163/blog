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
import { loadState, saveState } from './localStorage';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            res: false
        } 
    }
    render() {
        store.subscribe(() => {
            this.setState({ res: loadState() })
          });

            return (
                <Provider store={store}>
                        <div className="content">
                            <Header value={this.state.res}/>
                            <PostForm value={this.state.res}/>
                            <Posts />
                        </div>
                </Provider>
            );

    }
}

export default Blog;